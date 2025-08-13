import { defineItem } from '../item-registry';

export default defineItem('grapecake', {
  "item": {
    "name": "grapecake",
    "localized_name": "Traubenkuchen",
    "weight": 4,
    "source": "Groß-bäckerei",
    "sellPrice": 720,
    "market": 3,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\potatobread.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "grapecake",
    "localized_name": "Traubenkuchen",
    "finalWeight": 4,
    "trader": "Backwarenladen",
    "steps": [
      {
        "facility": "Mühle",
        "inputs": [
          "rye"
        ],
        "output": "rye_flour",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "rye_flour",
          "localized_name": "Roggenmehl"
        }
      },
      {
        "facility": "Groß-bäckerei",
        "inputs": [
          "grapes",
          "rye_flour"
        ],
        "output": "grapecake",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "grapecake",
          "localized_name": "Traubenkuchen",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});