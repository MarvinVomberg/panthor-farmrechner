import { defineItem } from '../item-registry';

export default defineItem('precious_metal_r', {
  "item": {
    "name": "precious_metal_r",
    "localized_name": "Edelmetalle",
    "weight": 4,
    "sellPrice": 535,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_3\\\\precious_metal_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "precious_metal_r",
    "localized_name": "Edelmetalle",
    "finalWeight": 4,
    "trader": "Metallhändler",
    "steps": [
      {
        "facility": "Recyclingwerk",
        "inputs": [
          "precious_metal_scrap"
        ],
        "output": "precious_metal_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "precious_metal_r",
          "localized_name": "Edelmetalle",
          "trader": "Metallhändler"
        }
      }
    ]
  }
});