import { defineItem } from '../item-registry';

export default defineItem('honey_r', {
  "item": {
    "name": "honey_r",
    "localized_name": "Honig",
    "weight": 2,
    "sellPrice": 355,
    "market": 2,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\Honey.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "honey_r",
    "localized_name": "Honig",
    "finalWeight": 2,
    "trader": "Supermarkt",
    "steps": [
      {
        "facility": "Imker",
        "inputs": [
          "honey_comb"
        ],
        "output": "honey_r",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "honey_r",
          "localized_name": "Honig",
          "trader": "Supermarkt"
        }
      }
    ]
  }
});