import { defineItem } from '../item-registry';

export default defineItem('concrete', {
  "item": {
    "name": "concrete",
    "localized_name": "Zementsack",
    "weight": 3,
    "source": "Zementwerk",
    "sellPrice": 510,
    "market": 1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_2\\\\concrete.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "concrete",
    "localized_name": "Zementsack",
    "finalWeight": 3,
    "trader": "Baustoffhändler",
    "steps": [
      {
        "facility": "Zementwerk",
        "inputs": [
          "stone"
        ],
        "output": "concrete",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "concrete",
          "localized_name": "Zementsack",
          "trader": "Baustoffhändler"
        }
      }
    ]
  }
});