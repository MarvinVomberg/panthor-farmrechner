import { defineItem } from '../item-registry';

export default defineItem('apple_juice', {
  "item": {
    "name": "apple_juice",
    "localized_name": "Apfelsaft",
    "weight": 3,
    "source": "Saftpresse",
    "sellPrice": 300,
    "market": 2,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\apple_juice.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "apple_juice",
    "localized_name": "Apfelsaft",
    "finalWeight": 3,
    "trader": "Saftladen",
    "steps": [
      {
        "facility": "Saftpresse",
        "inputs": [
          "apple"
        ],
        "output": "apple_juice",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "apple_juice",
          "localized_name": "Apfelsaft",
          "trader": "Saftladen"
        }
      }
    ]
  }
});