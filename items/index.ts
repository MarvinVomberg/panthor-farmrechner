// New items system powered by the new configuration
import { registry } from '~/config/auto-loader';
import { RawMaterial } from '~/farmroutes/production';

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

// Create items object compatible with old system
export const items: Record<string, RawMaterial> = {};

// Populate compatibility object
for (const [key, itemConfig] of registry.getAllItems()) {
  const rawMaterial = createRawMaterial(key);
  if (rawMaterial) {
    items[key] = rawMaterial;
  }
}

console.log(`✅ Loaded ${Object.keys(items).length} items from new configuration system`);