import { defineItem } from '../item-registry';

export default defineItem('oil_r', {
  "item": {
    "name": "oil_r",
    "localized_name": "Öl",
    "weight": 4,
    "source": "Raffinerie",
    "sellPrice": 330,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_4\\\\oil_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "oil_r",
    "localized_name": "Öl",
    "finalWeight": 4,
    "trader": "Öllager",
    "steps": [
      {
        "facility": "Raffinerie",
        "inputs": [
          "crude_oil"
        ],
        "output": "oil_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "oil_r",
          "localized_name": "Öl",
          "trader": "Öllager"
        }
      }
    ]
  }
});