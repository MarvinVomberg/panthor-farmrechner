import { defineItem } from '../item-registry';

export default defineItem('bread', {
  "item": {
    "name": "bread",
    "localized_name": "Brot",
    "weight": 2,
    "source": "Bäckerei",
    "sellPrice": 385,
    "market": 3,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\bread.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "bread",
    "localized_name": "Brot",
    "finalWeight": 2,
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
        "facility": "Bäckerei",
        "inputs": [
          "rye_flour"
        ],
        "output": "bread",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "bread",
          "localized_name": "Brot",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});