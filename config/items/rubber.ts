import { defineItem } from '../item-registry';

export default defineItem('rubber', {
  "item": {
    "name": "rubber",
    "localized_name": "Gummi",
    "weight": 4,
    "source": "Kunststofffabrik",
    "sellPrice": 320,
    "market": 0,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_4\\\\rubber.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "rubber",
    "localized_name": "Gummi",
    "finalWeight": 4,
    "trader": "Kunststofffabrik",
    "steps": [
      {
        "facility": "Ölschiff",
        "inputs": [
          "crude_oil"
        ],
        "output": "rubber",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "rubber",
          "localized_name": "Gummi",
          "trader": "Kunststofffabrik"
        }
      }
    ]
  }
});