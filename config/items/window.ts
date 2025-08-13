import { defineItem } from '../item-registry';

export default defineItem('window', {
  "item": {
    "name": "window",
    "localized_name": "Window",
    "weight": 5,
    "sellPrice": 1065,
    "market": 1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_3\\\\window.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "window",
    "localized_name": "Fenster",
    "finalWeight": 5,
    "trader": "Exporthändler",
    "steps": [
      {
        "facility": "Brennofen",
        "inputs": [
          "sand"
        ],
        "output": "glass",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "glass",
          "localized_name": "Glas"
        }
      },
      {
        "facility": "Kunststofffabrik",
        "inputs": [
          "crude_oil"
        ],
        "output": "plastic",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "plastic",
          "localized_name": "Plastik"
        }
      },
      {
        "facility": "Montagefabrik",
        "inputs": [
          "glass",
          "plastic"
        ],
        "output": "window",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "window",
          "localized_name": "Fenster",
          "trader": "Exporthändler"
        }
      }
    ]
  }
});