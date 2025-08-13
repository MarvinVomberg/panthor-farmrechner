import { defineItem } from '../item-registry';

export default defineItem('titanium_r', {
  "item": {
    "name": "titanium_r",
    "localized_name": "Titanbarren",
    "weight": 4,
    "source": "Space-Drop / Schrottsammelplatz",
    "sellPrice": 515,
    "market": -1,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_3\\\\titanium_r.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "titanium_r",
    "localized_name": "Titanbarren",
    "finalWeight": 4,
    "trader": "TItanverarbeiter",
    "steps": [
      {
        "facility": "Titaniumschmelze",
        "inputs": [
          "titanium_ore"
        ],
        "output": "titanium_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "titanium_r",
          "localized_name": "Titanbarren",
          "trader": "Titaniumschmelze"
        }
      }
    ]
  }
});