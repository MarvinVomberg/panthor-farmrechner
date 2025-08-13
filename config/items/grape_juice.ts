import { defineItem } from '../item-registry';

export default defineItem('grape_juice', {
  "item": {
    "name": "grape_juice",
    "localized_name": "Traubensaft",
    "weight": 3,
    "source": "Saftpresse",
    "sellPrice": 305,
    "market": 2,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\bww_dlc\\\\grape_juice.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "grape_juice",
    "localized_name": "Traubensaft",
    "finalWeight": 3,
    "trader": "Saftladen",
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
          "localized_name": "Traubensaft",
          "trader": "Saftladen"
        }
      }
    ]
  }
});