/**
 * Migration helper for converting old item/farmroute definitions to new format
 * This is a development utility to help with the migration process
 */

import { server_items_cfg } from '~/farmroutes/server_items_cfg';
import type { ItemDefinition } from './item-registry';

export function generateItemDefinition(itemKey: string): string {
  const serverConfig = server_items_cfg[itemKey];
  
  if (!serverConfig) {
    throw new Error(`Item ${itemKey} not found in server config`);
  }
  
  const definition: ItemDefinition = {
    item: {
      name: itemKey,
      localized_name: serverConfig.displayName.replace('STR_', '').replace('_', ' '),
      weight: serverConfig.weight,
      sellPrice: serverConfig.sellPrice,
      market: serverConfig.market,
      icon: serverConfig.icon,
      illegal: serverConfig.illegal,
      drug: serverConfig.drug,
      edible: serverConfig.edible,
      exp: serverConfig.exp,
      buyPrice: serverConfig.buyPrice,
      tool: serverConfig.tool,
      eventItem: serverConfig.eventItem,
      shredderAble: serverConfig.shredderAble
    }
  };
  
  return `import { defineItem } from '../item-registry';

export default defineItem('${itemKey}', ${JSON.stringify(definition, null, 2)});`;
}

export function logMigrationStats() {
  const totalServerItems = Object.keys(server_items_cfg).length;
  console.log(`Found ${totalServerItems} items in server config`);
  console.log('Items to migrate:', Object.keys(server_items_cfg));
}

// Usage example:
// console.log(generateItemDefinition('copper_r'));