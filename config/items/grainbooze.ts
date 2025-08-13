import { defineItem } from '../item-registry';

export default defineItem('grainbooze', {
  "item": {
    "name": "grainbooze",
    "localized_name": "Korn",
    "weight": 3,
    "source": "Distellerie",
    "sellPrice": 580,
    "market": 5,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_5\\\\grainbooze.paa",
    "illegal": true,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "grainbooze",
    "localized_name": "Korn",
    "finalWeight": 3,
    "trader": "Sascha's Bar",
    "steps": [
      {
        "facility": "Maische",
        "inputs": [
          "wheat"
        ],
        "output": "wheat_mash",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "wheat_mash",
          "localized_name": "Weizen Maische"
        }
      },
      {
        "facility": "Distellerie",
        "inputs": [
          "wheat_mash"
        ],
        "output": "grainbooze",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "corn",
          "localized_name": "Korn",
          "trader": "Sascha's Bar"
        }
      }
    ]
  }
});