import { defineItem } from '../item-registry';

export default defineItem('fentanyl_r', {
  "item": {
    "name": "fentanyl_r",
    "localized_name": "FentanylP",
    "weight": 4,
    "sellPrice": 1925,
    "market": 4,
    "icon": "r\\\\RL\\\\addons\\\\Textures\\\\icons\\\\v_items\\\\stage_4\\\\fentanyl_r.paa",
    "illegal": true,
    "drug": true,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "fentanyl_r",
    "localized_name": "Fentanyl-Spritze",
    "finalWeight": 4,
    "trader": "Drogendealer",
    "steps": [
      {
        "facility": "Wohnmobil",
        "inputs": [
          "bandages"
        ],
        "output": "unverarbeitetes Fentanyl",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "unverarbeitetes Fentanyl",
          "localized_name": "Raw Fentanyl"
        }
      },
      {
        "facility": "Kunststofffabrik",
        "inputs": [
          "crude_oil"
        ],
        "output": "Plastik",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "Plastik",
          "localized_name": "Plastic"
        }
      },
      {
        "facility": "Drogenküche ab LVL2",
        "inputs": [
          "raw_fentanyl",
          "plastic"
        ],
        "output": "fentanyl_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "fentanyl_r",
          "localized_name": "Fentanyl-Spritze",
          "trader": "Drogendealer"
        }
      }
    ]
  }
});