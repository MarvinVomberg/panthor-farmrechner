import { defineItem } from '../item-registry';

export default defineItem('rye_r', {
  "item": {
    "name": "rye_r",
    "localized_name": "Roggenmehl",
    "weight": 3,
    "source": "Mühle",
    "sellPrice": 215,
    "market": 2,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\rye_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "rye_r",
    "localized_name": "Roggenmehl",
    "finalWeight": 3,
    "trader": "Backwarenladen",
    "steps": [
      {
        "facility": "Mühle",
        "inputs": [
          "rye"
        ],
        "output": "rye_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "rye_r",
          "localized_name": "Roggenmehl",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});