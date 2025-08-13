import { defineItem } from '../item-registry';

export default defineItem('applewine', {
  "item": {
    "name": "applewine",
    "localized_name": "Apfelwein",
    "weight": 2,
    "source": "Winzerei",
    "sellPrice": 460,
    "market": 5,
    "icon": "r\\\\RL\\\\addons\\\\Textures\\\\icons\\\\v_items\\\\bww_dlc\\\\applewine.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "applewine",
    "localized_name": "Apfelwein",
    "finalWeight": 2,
    "trader": "Sascha's Bar",
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
          "localized_name": "Apfelsaft"
        }
      },
      {
        "facility": "Winzerei",
        "inputs": [
          "apple_juice"
        ],
        "output": "applewine",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "applewine",
          "localized_name": "Apfelwein",
          "trader": "Sascha's Bar"
        }
      }
    ]
  }
});