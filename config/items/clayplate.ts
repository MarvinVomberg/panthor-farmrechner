import { defineItem } from '../item-registry';

export default defineItem('clayplate', {
  "item": {
    "name": "clayplate",
    "localized_name": "Clayplate",
    "weight": 5,
    "sellPrice": 775,
    "market": 1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_2\\\\clayplate.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "clayplate",
    "localized_name": "Lehmbauplatten",
    "finalWeight": 5,
    "trader": "Baustoffhändler",
    "steps": [
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
        "facility": "Baustofffabrik",
        "inputs": [
          "clay",
          "wood_r"
        ],
        "output": "clayplate",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "clayplate",
          "localized_name": "Lehmbauplatten",
          "trader": "Baustoffhändler"
        }
      }
    ]
  }
});