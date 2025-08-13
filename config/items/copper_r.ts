import { defineItem } from '../item-registry';

export default defineItem('copper_r', {
  "item": {
    "name": "copper_r",
    "localized_name": "Kupferbarren",
    "weight": 3,
    "source": "Hochofen/Erzhütte",
    "sellPrice": 295,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_2\\\\copper_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "copper_r",
    "localized_name": "Kupferbarren",
    "finalWeight": 3,
    "trader": "Metallhändler",
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
          "localized_name": "Kupferbarren",
          "trader": "Metallhändler"
        }
      }
    ]
  }
});