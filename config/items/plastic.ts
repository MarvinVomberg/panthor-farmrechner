import { defineItem } from '../item-registry';

export default defineItem('plastic', {
  "item": {
    "name": "plastic",
    "localized_name": "Plastik",
    "weight": 3,
    "source": "Kunststofffabrik",
    "sellPrice": 320,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_4\\\\plastic.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "plastic",
    "localized_name": "Plastik",
    "finalWeight": 3,
    "trader": "Kunststoffhändler",
    "steps": [
      {
        "facility": "Kunststofffabrik",
        "inputs": [
          "crude_oil"
        ],
        "output": "plastic",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "plastic",
          "localized_name": "Plastik",
          "trader": "Kunststoffhändler"
        }
      }
    ]
  }
});