// New farmroutes system powered by the new configuration
import { registry } from '~/config/auto-loader';
import { RawMaterial, GenericProduction, ProcessingStep, Product } from './production';
export type { GenericProduction } from "./production";

// Adapter to convert new config to old RawMaterial class
function createRawMaterial(key: string): RawMaterial | undefined {
  const item = registry.getItem(key);
  if (!item) return undefined;
  
  return new RawMaterial(
    item.name,
    item.localized_name,
    item.source || '',
    item.weight
  );
}

// Adapter to convert new config to old GenericProduction class  
function createGenericProduction(key: string): GenericProduction | undefined {
  const production = registry.getProduction(key);
  const item = registry.getItem(key);
  
  if (!production || !item) return undefined;
  
  // Create raw materials for inputs (excluding intermediate products)
  const rawMaterials: RawMaterial[] = [];
  const allInputs = new Set<string>();
  const intermediateOutputs = new Set<string>();
  
  // First collect all intermediate outputs
  for (const step of production.steps) {
    intermediateOutputs.add(step.output);
  }
  
  // Then collect inputs that are not intermediate outputs
  for (const step of production.steps) {
    for (const input of step.inputs) {
      if (!intermediateOutputs.has(input)) {
        allInputs.add(input);
      }
    }
  }
  
  for (const inputKey of allInputs) {
    const rawMaterial = createRawMaterial(inputKey);
    if (rawMaterial) {
      rawMaterials.push(rawMaterial);
    }
  }
  
  // Create processing steps
  const processingSteps: ProcessingStep[] = [];
  
  for (const stepConfig of production.steps) {
    const inputMaterials = stepConfig.inputs
      .map(inputKey => createRawMaterial(inputKey))
      .filter((material): material is RawMaterial => material !== undefined);
    
    const outputMaterial = createRawMaterial(stepConfig.output);
    if (!outputMaterial) continue;
    
    let intermediateProduct: Product | undefined;
    if (stepConfig.intermediateProduct) {
      intermediateProduct = new Product(
        stepConfig.intermediateProduct.name,
        stepConfig.intermediateProduct.localized_name,
        [],
        stepConfig.outputWeight,
        stepConfig.intermediateProduct.trader
      );
    }
    
    const step = new ProcessingStep(
      stepConfig.facility,
      inputMaterials,
      outputMaterial,
      outputMaterial.weight,
      stepConfig.outputWeight,
      intermediateProduct
    );
    
    processingSteps.push(step);
  }
  
  return new GenericProduction(
    production.name,
    production.localized_name,
    rawMaterials,
    processingSteps,
    production.finalWeight,
    production.trader,
    production.price
  );
}

// Create farmroutes object compatible with old system
export const farmroutes: Record<string, GenericProduction> = {};

// Populate compatibility object
for (const [key, productionConfig] of registry.getAllProductions()) {
  const production = createGenericProduction(key);
  if (production) {
    farmroutes[key] = production;
  }
}

console.log(`✅ Loaded ${Object.keys(farmroutes).length} farmroutes from new configuration system`);