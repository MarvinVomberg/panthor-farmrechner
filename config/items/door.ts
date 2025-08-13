import { defineItem } from '../item-registry';

export default defineItem('door', {
  "item": {
    "name": "door",
    "localized_name": "Tür",
    "weight": 5,
    "source": "Montagefabrik",
    "sellPrice": 1005,
    "market": 1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_3\\\\door.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "door",
    "localized_name": "Tür",
    "finalWeight": 5,
    "trader": "Exporthändler",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "iron_ore"
        ],
        "output": "Eisenbarren",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "Eisenbarren",
          "localized_name": "Iron Bar"
        }
      },
      {
        "facility": "Sägewerk",
        "inputs": [
          "wood"
        ],
        "output": "Bretter",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "Bretter",
          "localized_name": "Boards"
        }
      },
      {
        "facility": "Montagefabrik",
        "inputs": [
          "iron_bar",
          "wood_r"
        ],
        "output": "door",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "door",
          "localized_name": "Tür",
          "trader": "Exporthändler"
        }
      }
    ]
  }
});