import { defineItem } from '../item-registry';

export default defineItem('tissue', {
  "item": {
    "name": "tissue",
    "localized_name": "Gewebe",
    "weight": 3,
    "source": "Schneider",
    "sellPrice": 815,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_3\\\\tissue.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "tissue",
    "localized_name": "Gewebe",
    "finalWeight": 3,
    "trader": "Exporthändler",
    "steps": [
      {
        "facility": "Baumwollverarbeiter",
        "inputs": [
          "cotton_fibers"
        ],
        "output": "cotton",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "cotton",
          "localized_name": "Baumwolle"
        }
      },
      {
        "facility": "Schneider",
        "inputs": [
          "cotton"
        ],
        "output": "tissue",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "tissue",
          "localized_name": "Gewebe",
          "trader": "Exporthändler"
        }
      }
    ]
  }
});