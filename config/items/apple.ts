import { defineItem } from '../item-registry';

export default defineItem('apple', {
  "item": {
    "name": "apple",
    "localized_name": "Apfel",
    "weight": 2,
    "source": "Apfelfeld",
    "sellPrice": 90,
    "market": -1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\apple.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "apple",
    "localized_name": "Apfel",
    "finalWeight": 2,
    "trader": "Supermarkt",
    "steps": [
      {
        "facility": "Supermarkt",
        "inputs": [],
        "output": "apple",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "apple",
          "localized_name": "Apfel",
          "trader": "Supermarkt"
        }
      }
    ]
  }
});