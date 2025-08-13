import { defineItem } from '../item-registry';

export default defineItem('wine_r', {
  "item": {
    "name": "wine_r",
    "localized_name": "Wein",
    "weight": 2,
    "source": "Winzerei",
    "sellPrice": 470,
    "market": 5,
    "icon": "r\\\\RL\\\\addons\\\\Textures\\\\icons\\\\v_items\\\\bww_dlc\\\\wine.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "wine_r",
    "localized_name": "Wein",
    "finalWeight": 2,
    "trader": "Sascha's Bar",
    "steps": [
      {
        "facility": "Saftpresse",
        "inputs": [
          "grapes"
        ],
        "output": "grape_juice",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "grape_juice",
          "localized_name": "Traubensaft"
        }
      },
      {
        "facility": "Winzerei",
        "inputs": [
          "grape_juice"
        ],
        "output": "wine_r",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "wine_r",
          "localized_name": "Wein",
          "trader": "Sascha's Bar"
        }
      }
    ]
  }
});