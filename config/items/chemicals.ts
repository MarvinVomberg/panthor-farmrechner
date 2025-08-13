import { defineItem } from '../item-registry';

export default defineItem('chemicals', {
  "item": {
    "name": "chemicals",
    "localized_name": "Chemikalien",
    "weight": 4,
    "source": "Raffinerie",
    "sellPrice": 1,
    "market": -1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_5\\\\chemicals.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "chemicals",
    "localized_name": "Chemikalien",
    "finalWeight": 4,
    "steps": [
      {
        "facility": "Raffinerie",
        "inputs": [
          "crude_oil"
        ],
        "output": "chemicals",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "chemicals",
          "localized_name": "Chemikalien"
        }
      }
    ]
  }
});