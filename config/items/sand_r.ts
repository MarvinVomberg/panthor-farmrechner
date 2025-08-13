import { defineItem } from '../item-registry';

export default defineItem('sand_r', {
  "item": {
    "name": "sand_r",
    "localized_name": "Glass",
    "weight": 3,
    "sellPrice": 310,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_2\\\\sand_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "sand_r",
    "localized_name": "Glas",
    "finalWeight": 3,
    "trader": "Baustoffhändler",
    "steps": [
      {
        "facility": "Brennofen",
        "inputs": [
          "sand"
        ],
        "output": "sand_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "sand_r",
          "localized_name": "Glas",
          "trader": "Baustoffhändler"
        }
      }
    ]
  }
});