import { defineItem } from '../item-registry';

export default defineItem('wood_r', {
  "item": {
    "name": "wood_r",
    "localized_name": "Bretter",
    "weight": 4,
    "source": "Sägewerk",
    "sellPrice": 320,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_2\\\\wood_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "wood_r",
    "localized_name": "Bretter",
    "finalWeight": 4,
    "trader": "Holzhandel",
    "steps": [
      {
        "facility": "Sägewerk",
        "inputs": [
          "wood"
        ],
        "output": "wood_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "wood_r",
          "localized_name": "Bretter",
          "trader": "Holzhandel"
        }
      }
    ]
  }
});