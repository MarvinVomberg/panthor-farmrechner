import { defineItem } from '../item-registry';

export default defineItem('beer', {
  "item": {
    "name": "beer",
    "localized_name": "Bier",
    "weight": 3,
    "source": "Brauerei",
    "sellPrice": 690,
    "market": 5,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_5\\\\beer.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "beer",
    "localized_name": "Bier",
    "finalWeight": 3,
    "trader": "Sascha's Bar",
    "steps": [
      {
        "facility": "Mälzerei",
        "inputs": [
          "barley"
        ],
        "output": "malt",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "malt",
          "localized_name": "Malz"
        }
      },
      {
        "facility": "Brauerei",
        "inputs": [
          "hops",
          "malt"
        ],
        "output": "beer",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "beer",
          "localized_name": "Bier",
          "trader": "Sascha's Bar"
        }
      }
    ]
  }
});