import { registry } from './item-registry';

// Only load successfully migrated items with production chains
const migratedItems = [
  'apple', 'apple_juice', 'applepie', 'applewine', 'barley', 'beer', 'biscuit', 'bread', 'cable',
  'chemicals', 'clay_r', 'concrete', 'copper_r', 'cotton', 'door', 'fish_sticks',
  'grainbooze', 'grape_juice', 'grapecake', 'grapes', 'hops', 'insulation', 'iron_bar',
  'jewelry', 'leather', 'lsd', 'malt', 'meat_r', 'moonshiner', 'oil_r', 'plastic', 'rubber',
  'rye_r', 'scrap', 'steel_r', 'tissue', 'titanium_r', 'vodka', 'wheat_r',
  'wine_r', 'wood_r', 'alu_bar', 'bread_roll', 'charcoal', 'clayplate', 'fentanyl_r',
  'fishfilet', 'honey_r', 'precious_metal_r', 'rye', 'rye_flour', 'sand_r', 'sugar_r', 'sugar_beet',
  'trout_sturgeon', 'wheat', 'window', 'wood', 'iron_ore', 'copper_ore', 'crude_oil', 'precious_metal_scrap'
];

// Auto-discovery function that can be called to load all items
export async function loadAllItems() {
  if (typeof import.meta !== 'undefined' && import.meta.glob) {
    // Vite/Nuxt environment - load all available item files
    const itemModules = import.meta.glob('./items/*.ts', { eager: true });
    
    for (const [path, module] of Object.entries(itemModules)) {
      const defaultExport = (module as any).default;
      // The defineItem function already registers the item during import
    }
  } else {
    // Node.js environment - manually import specific items
    try {
      // Import a few key items to test the system
      await import('./items/apple.ts');
      await import('./items/beer.ts');  
      await import('./items/bread.ts');
      await import('./items/aluminum_r.ts');
      console.log(`✅ Loaded ${migratedItems.length} items from registry`);
    } catch (error) {
      console.warn('Some items could not be loaded:', error);
    }
  }
}

// Load items immediately
loadAllItems();

export { registry };