import { server_items_cfg } from '~/farmroutes/server_items_cfg';
import type { ItemDefinition, ProcessingStepConfig } from './item-registry';
import fs from 'fs';
import path from 'path';

// Import existing items and farmroutes dynamically
const itemFiles = [
  'aluminum_r', 'alu_ore', 'apple', 'apple_juice', 'applepie', 'animal_skins', 'bandages', 'barley', 
  'beer', 'biscuit', 'bread', 'cable', 'charcoal_r', 'chemicals', 'clay', 'clay_boards', 'concrete',
  'copper_r', 'copper_ore', 'cotton', 'cotton_fibers', 'crude_oil', 'door', 'fentanyl_syringe',
  'fish_filet', 'fish_sticks', 'glass', 'grapecake', 'grape_juice', 'grapes', 'heroin_syringe',
  'hops', 'insulation', 'iron_bar', 'iron_ore', 'jewelry', 'leather', 'lsd', 'malt', 'meat_r',
  'moonshiner', 'opium_poppy', 'plastic', 'precious_metals_r', 'raw_fentanyl', 'raw_meat', 'roll',
  'rubber', 'rye', 'rye_r', 'sand', 'scrap', 'steel_r', 'stone', 'sugar', 'sugar_beet', 'tissue',
  'titanium_ore', 'titanium_r', 'trout_sturgeon', 'vodka', 'wheat', 'wheat_flour', 'windows', 'wood', 'wood_r'
];

const farmrouteFiles = [
  'alu_bar', 'apple', 'apple_juice', 'applepie', 'applewine', 'beer', 'biscuit', 'bread', 'bread_roll',
  'cable', 'charcoal', 'chemicals', 'clay_r', 'clayplate', 'concrete', 'copper_r', 'cotton', 'door',
  'fentanyl_r', 'fish_sticks', 'fishfilet', 'grapecake', 'grape_juice', 'grainbooze', 'honey_r',
  'insulation', 'iron_bar', 'jewelry', 'leather', 'lsd', 'meat_r', 'moonshiner', 'oil_r', 'plastic',
  'precious_metal_r', 'rubber', 'rye_r', 'sand_r', 'scrap', 'steel_r', 'sugar_r', 'tissue',
  'titanium_r', 'vodka', 'wheat_flour', 'window', 'wine_r', 'wood_r'
];

interface ItemInfo {
  name: string;
  localized_name: string;
  source: string;
  weight: number;
}

interface ProductionInfo {
  name: string;
  localized_name: string;
  rawMaterials: string[];
  steps: Array<{
    facility: string;
    inputs: string[];
    output: string;
    outputWeight: number;
    intermediateProduct?: {
      name: string;
      localized_name: string;
      trader?: string;
    };
  }>;
  finalWeight: number;
  trader?: string;
}

async function analyzeExistingSystem() {
  const itemsData = new Map<string, ItemInfo>();
  const productionsData = new Map<string, ProductionInfo>();
  
  // Dynamically import and analyze items
  for (const itemFile of itemFiles) {
    try {
      const module = await import(`~/items/${itemFile}`);
      const itemKey = Object.keys(module)[0];
      const item = module[itemKey];
      
      if (item && typeof item === 'object' && 'name' in item) {
        itemsData.set(item.name, {
          name: item.name,
          localized_name: item.localized_name || item.name,
          source: item.source || '',
          weight: item.weight || 1
        });
      }
    } catch (error) {
      console.warn(`Could not import item ${itemFile}:`, error);
    }
  }
  
  // Dynamically import and analyze farmroutes
  for (const farmrouteFile of farmrouteFiles) {
    try {
      const module = await import(`~/farmroutes/${farmrouteFile}`);
      const productionKey = Object.keys(module)[0];
      const production = module[productionKey];
      
      if (production && typeof production === 'object' && 'productName' in production) {
        const rawMaterials = production.getRawMaterials?.() || [];
        const productionSteps = production.getProductionSteps?.() || [];
        
        const steps = productionSteps.map((step: any) => ({
          facility: step.facility || '',
          inputs: step.inputMaterials?.map((mat: any) => mat.name) || [],
          output: step.output?.name || '',
          outputWeight: step.outputWeight || step.weight || 1,
          intermediateProduct: step.intermediateProduct ? {
            name: step.intermediateProduct.name,
            localized_name: step.intermediateProduct.localized_name,
            trader: step.intermediateProduct.trader
          } : undefined
        }));
        
        productionsData.set(production.productName, {
          name: production.productName,
          localized_name: production.productLocalizedName,
          rawMaterials: rawMaterials.map((mat: any) => mat.name),
          steps,
          finalWeight: production.finalWeight,
          trader: production.trader
        });
      }
    } catch (error) {
      console.warn(`Could not import farmroute ${farmrouteFile}:`, error);
    }
  }
  
  return { itemsData, productionsData };
}

function generateItemDefinition(
  itemKey: string, 
  itemInfo: ItemInfo | undefined, 
  productionInfo: ProductionInfo | undefined,
  serverConfig: any
): string {
  const definition: ItemDefinition = {
    item: {
      name: itemKey,
      localized_name: itemInfo?.localized_name || serverConfig?.displayName?.replace(/^STR_/, '').replace(/_/g, ' ') || itemKey,
      weight: itemInfo?.weight || serverConfig?.weight || 1,
      source: itemInfo?.source,
      sellPrice: serverConfig?.sellPrice,
      market: serverConfig?.market,
      icon: serverConfig?.icon,
      illegal: serverConfig?.illegal,
      drug: serverConfig?.drug,
      edible: serverConfig?.edible,
      exp: serverConfig?.exp,
      buyPrice: serverConfig?.buyPrice,
      tool: serverConfig?.tool,
      eventItem: serverConfig?.eventItem,
      shredderAble: serverConfig?.shredderAble
    }
  };
  
  if (productionInfo) {
    definition.production = {
      name: productionInfo.name,
      localized_name: productionInfo.localized_name,
      steps: productionInfo.steps,
      finalWeight: productionInfo.finalWeight,
      trader: productionInfo.trader
    };
  }
  
  // Clean up undefined values
  Object.keys(definition.item).forEach(key => {
    if (definition.item[key as keyof typeof definition.item] === undefined) {
      delete definition.item[key as keyof typeof definition.item];
    }
  });
  
  return `import { defineItem } from '../item-registry';

export default defineItem('${itemKey}', ${JSON.stringify(definition, null, 2)});`;
}

export async function migrateAllItems() {
  console.log('🔄 Analyzing existing items and farmroutes...');
  const { itemsData, productionsData } = await analyzeExistingSystem();
  
  console.log(`📊 Found ${itemsData.size} items and ${productionsData.size} productions`);
  
  // Get all unique item keys from all sources
  const allItemKeys = new Set([
    ...itemsData.keys(),
    ...productionsData.keys(),
    ...Object.keys(server_items_cfg)
  ]);
  
  console.log(`📝 Generating ${allItemKeys.size} item definitions...`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const itemKey of allItemKeys) {
    try {
      const itemInfo = itemsData.get(itemKey);
      const productionInfo = productionsData.get(itemKey);
      const serverConfig = server_items_cfg[itemKey];
      
      const definition = generateItemDefinition(itemKey, itemInfo, productionInfo, serverConfig);
      
      // Ensure directory exists
      const itemsDir = path.join(process.cwd(), 'config', 'items');
      if (!fs.existsSync(itemsDir)) {
        fs.mkdirSync(itemsDir, { recursive: true });
      }
      
      // Write the file
      const filePath = path.join(itemsDir, `${itemKey}.ts`);
      fs.writeFileSync(filePath, definition);
      
      console.log(`✅ Generated config/items/${itemKey}.ts`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error generating ${itemKey}:`, error);
      errorCount++;
    }
  }
  
  console.log(`\n🎉 Migration complete!`);
  console.log(`✅ Successfully generated: ${successCount} items`);
  console.log(`❌ Errors: ${errorCount} items`);
  
  // Generate summary report
  const report = `# Migration Report

## Statistics
- Total items processed: ${allItemKeys.size}
- Successfully migrated: ${successCount}
- Errors: ${errorCount}

## Items with productions: ${productionsData.size}
${Array.from(productionsData.keys()).map(key => `- ${key}`).join('\n')}

## Raw materials only: ${itemsData.size - productionsData.size}
${Array.from(itemsData.keys()).filter(key => !productionsData.has(key)).map(key => `- ${key}`).join('\n')}

## Server-only items: ${Object.keys(server_items_cfg).length - itemsData.size}
${Object.keys(server_items_cfg).filter(key => !itemsData.has(key)).map(key => `- ${key}`).join('\n')}
`;
  
  fs.writeFileSync(path.join(process.cwd(), 'config', 'MIGRATION_REPORT.md'), report);
  console.log('\n📋 Generated MIGRATION_REPORT.md');
}

// Run migration if this file is executed directly
if (require.main === module) {
  migrateAllItems().catch(console.error);
}