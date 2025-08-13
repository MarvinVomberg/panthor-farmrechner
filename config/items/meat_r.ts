import { defineItem } from '../item-registry';

export default defineItem('meat_r', {
  "item": {
    "name": "meat_r",
    "localized_name": "Fleisch",
    "weight": 3,
    "source": "Lagerfeuer",
    "sellPrice": 455,
    "market": 3,
    "icon": "r\\\\RL\\\\addons\\\\Textures\\\\icons\\\\v_items\\\\stage_h\\\\meat_r.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "meat_r",
    "localized_name": "Fleisch",
    "finalWeight": 3,
    "trader": "Supermarkt",
    "steps": [
      {
        "facility": "Lagerfeuer",
        "inputs": [
          "raw_meat"
        ],
        "output": "meat_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "meat_r",
          "localized_name": "Fleisch",
          "trader": "Supermarkt"
        }
      }
    ]
  }
});