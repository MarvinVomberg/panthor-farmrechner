import { defineItem } from '../item-registry';

export default defineItem('fishfilet', {
  "item": {
    "name": "fishfilet",
    "localized_name": "Fishfilet",
    "weight": 2,
    "sellPrice": 215,
    "market": 3,
    "icon": "r\\\\RL\\\\addons\\\\Textures\\\\icons\\\\v_items\\\\stage_h\\\\fish_r.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "fishfilet",
    "localized_name": "Fischfilet",
    "finalWeight": 2,
    "trader": "Fischmarkt",
    "steps": [
      {
        "facility": "Fischverarbeitung",
        "inputs": [
          "trout_sturgeon"
        ],
        "output": "fishfilet",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "fishfilet",
          "localized_name": "Fischfilet",
          "trader": "Fischmarkt"
        }
      }
    ]
  }
});