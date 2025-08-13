import { defineItem } from '../item-registry';

export default defineItem('clay_r', {
  "item": {
    "name": "clay_r",
    "localized_name": "Ziegel",
    "weight": 4,
    "source": "Brennofen",
    "sellPrice": 340,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_2\\\\clay_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "clay_r",
    "localized_name": "Ziegel",
    "finalWeight": 4,
    "trader": "Baustoffhändler",
    "steps": [
      {
        "facility": "Brennofen",
        "inputs": [
          "clay"
        ],
        "output": "clay_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "clay_r",
          "localized_name": "Ziegel",
          "trader": "Baustoffhändler"
        }
      }
    ]
  }
});