interface ItemConfig {
  name: string;
  localized_name: string;
  weight: number;
  source?: string;
  sellPrice?: number;
  market?: number;
  icon?: string;
  illegal?: boolean;
  drug?: boolean;
  edible?: number;
  exp?: number;
  buyPrice?: number;
  tool?: string;
  eventItem?: boolean;
  shredderAble?: number;
}

interface ProcessingStepConfig {
  facility: string;
  inputs: string[];
  output: string;
  outputWeight: number;
  intermediateProduct?: {
    name: string;
    localized_name: string;
    trader?: string;
  };
}

interface ProductionConfig {
  name: string;
  localized_name: string;
  steps: ProcessingStepConfig[];
  finalWeight: number;
  trader?: string;
  price?: number;
}

interface ItemDefinition {
  item: ItemConfig;
  production?: ProductionConfig;
}

class ItemRegistry {
  private items = new Map<string, ItemConfig>();
  private productions = new Map<string, ProductionConfig>();
  
  register(key: string, definition: ItemDefinition) {
    this.items.set(key, definition.item);
    if (definition.production) {
      this.productions.set(key, definition.production);
    }
  }
  
  getItem(key: string): ItemConfig | undefined {
    return this.items.get(key);
  }
  
  getProduction(key: string): ProductionConfig | undefined {
    return this.productions.get(key);
  }
  
  getAllItems(): Map<string, ItemConfig> {
    return new Map(this.items);
  }
  
  getAllProductions(): Map<string, ProductionConfig> {
    return new Map(this.productions);
  }
}

export const registry = new ItemRegistry();

export function defineItem(key: string, definition: ItemDefinition) {
  registry.register(key, definition);
  return definition;
}

export { ItemConfig, ProductionConfig, ProcessingStepConfig, ItemDefinition };