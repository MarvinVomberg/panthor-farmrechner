import { defineItem } from '../item-registry';

export default defineItem('rye_flour', {
  "item": {
    "name": "rye_flour",
    "localized_name": "Roggenmehl",
    "weight": 3,
    "source": "Mühle",
    "sellPrice": 85,
    "market": -1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\rye_flour.paa",
    "illegal": false,
    "drug": false,
    "edible": -1,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "rye_flour",
    "localized_name": "Roggenmehl",
    "finalWeight": 3,
    "trader": "Backwarenladen",
    "steps": [
      {
        "facility": "Mühle",
        "inputs": [
          "rye"
        ],
        "output": "rye_flour",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "rye_flour",
          "localized_name": "Roggenmehl",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});