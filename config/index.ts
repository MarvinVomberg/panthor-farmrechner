// New configuration system
export { registry, defineItem } from './item-registry';
export type { ItemConfig, ProductionConfig, ProcessingStepConfig, ItemDefinition } from './item-registry';

// Compatibility exports for existing code
export { items, farmroutes } from './adapters';

// Auto-load all items (this registers them in the registry)
import './auto-loader';

/**
 * Usage examples:
 * 
 * // Get an item from the new registry
 * import { registry } from '~/config';
 * const appleItem = registry.getItem('apple');
 * 
 * // Use compatibility layer (works with existing code)
 * import { items, farmroutes } from '~/config';
 * const appleRawMaterial = items.apple;
 * const beerProduction = farmroutes.beer;
 */