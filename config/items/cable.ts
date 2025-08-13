import { defineItem } from '../item-registry';

export default defineItem('cable', {
  "item": {
    "name": "cable",
    "localized_name": "Kabel",
    "weight": 5,
    "source": "Montagefabrik",
    "sellPrice": 1035,
    "market": 1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_3\\\\cable.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "cable",
    "localized_name": "Kabel",
    "finalWeight": 5,
    "trader": "Exporthändler",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "copper_ore"
        ],
        "output": "copper_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "copper_r",
          "localized_name": "Kupferbarren"
        }
      },
      {
        "facility": "Kunststofffabrik",
        "inputs": [
          "crude_oil"
        ],
        "output": "rubber",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "rubber",
          "localized_name": "Gummi"
        }
      },
      {
        "facility": "Montagefabrik",
        "inputs": [
          "copper_r",
          "rubber"
        ],
        "output": "cable",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "cable",
          "localized_name": "Kabel",
          "trader": "Exporthändler"
        }
      }
    ]
  }
});