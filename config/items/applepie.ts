import { defineItem } from '../item-registry';

export default defineItem('applepie', {
  "item": {
    "name": "applepie",
    "localized_name": "Apfelkuchen",
    "weight": 4,
    "source": "Groß-bäckerei",
    "sellPrice": 720,
    "market": 3,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_1\\\\applepie.paa",
    "illegal": false,
    "drug": false,
    "edible": 10,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "applepie",
    "localized_name": "Apfelkuchen",
    "finalWeight": 4,
    "trader": "Backwarenladen",
    "steps": [
      {
        "facility": "Mühle",
        "inputs": [
          "wheat"
        ],
        "output": "wheat_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "wheat_r",
          "localized_name": "Weizenmehl"
        }
      },
      {
        "facility": "Groß-bäckerei",
        "inputs": [
          "apple",
          "wheat_r"
        ],
        "output": "applepie",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "applepie",
          "localized_name": "Apfelkuchen",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});