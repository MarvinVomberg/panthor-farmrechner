import { defineItem } from '../item-registry';

export default defineItem('vodka', {
  "item": {
    "name": "vodka",
    "localized_name": "Vodka",
    "weight": 3,
    "source": "Distellerie",
    "sellPrice": 580,
    "market": 5,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_5\\\\vodka.paa",
    "illegal": true,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "vodka",
    "localized_name": "Vodka",
    "finalWeight": 3,
    "trader": "Sascha's Bar",
    "steps": [
      {
        "facility": "Maische",
        "inputs": [
          "rye"
        ],
        "output": "rye_mash",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "rye_mash",
          "localized_name": "Roggen Maische"
        }
      },
      {
        "facility": "Distellerie",
        "inputs": [
          "rye_mash"
        ],
        "output": "vodka",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "vodka",
          "localized_name": "Vodka",
          "trader": "Sascha's Bar"
        }
      }
    ]
  }
});