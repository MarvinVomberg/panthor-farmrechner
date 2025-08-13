import { defineItem } from '../item-registry';

export default defineItem('sugar_r', {
  "item": {
    "name": "sugar_r",
    "localized_name": "Zucker",
    "weight": 2,
    "sellPrice": 195,
    "market": 2,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\sugar_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "sugar_r",
    "localized_name": "Zucker",
    "finalWeight": 2,
    "trader": "Backwarenladen",
    "steps": [
      {
        "facility": "Zuckerraffinerie",
        "inputs": [
          "sugar_beet"
        ],
        "output": "sugar_r",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "sugar_r",
          "localized_name": "Zucker",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});