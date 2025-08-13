import { defineItem } from '../item-registry';

export default defineItem('biscuit', {
  "item": {
    "name": "biscuit",
    "localized_name": "Keks",
    "weight": 8,
    "source": "Groß-bäckerei",
    "sellPrice": 1125,
    "market": 3,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\biscuit.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "biscuit",
    "localized_name": "Keks",
    "finalWeight": 8,
    "trader": "Backwarenladen",
    "steps": [
      {
        "facility": "Mühle",
        "inputs": [
          "wheat"
        ],
        "output": "wheat_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "wheat_r",
          "localized_name": "Weizenmehl"
        }
      },
      {
        "facility": "Mühle",
        "inputs": [
          "rye"
        ],
        "output": "rye_flour",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "rye_flour",
          "localized_name": "Roggenmehl"
        }
      },
      {
        "facility": "Zuckerraffinerie",
        "inputs": [
          "sugar_beet"
        ],
        "output": "sugar_r",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "sugar_r",
          "localized_name": "Zucker"
        }
      },
      {
        "facility": "Groß-bäckerei",
        "inputs": [
          "wheat_r",
          "rye_flour",
          "sugar_r"
        ],
        "output": "biscuit",
        "outputWeight": 8,
        "intermediateProduct": {
          "name": "biscuit",
          "localized_name": "Keks",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});