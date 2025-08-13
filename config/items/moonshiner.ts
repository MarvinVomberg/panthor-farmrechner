import { defineItem } from '../item-registry';

export default defineItem('moonshiner', {
  "item": {
    "name": "moonshiner",
    "localized_name": "Moonshiner",
    "weight": 6,
    "source": "Badewanne",
    "sellPrice": 1330,
    "market": 5,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_5\\\\moonshiner.paa",
    "illegal": true,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "moonshiner",
    "localized_name": "Moonshiner",
    "finalWeight": 6,
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
        "facility": "Badewanne",
        "inputs": [
          "apple_juice",
          "grape_juice"
        ],
        "output": "moonshiner",
        "outputWeight": 6,
        "intermediateProduct": {
          "name": "moonshiner",
          "localized_name": "Moonshiner",
          "trader": "Sascha's Bar"
        }
      }
    ]
  }
});