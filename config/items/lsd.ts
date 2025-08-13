import { defineItem } from '../item-registry';

export default defineItem('lsd', {
  "item": {
    "name": "lsd",
    "localized_name": "LSD",
    "weight": 5,
    "source": "Drogenküche ab LVL2",
    "sellPrice": 3755,
    "market": 4,
    "icon": "r\\\\RL\\\\addons\\\\textures\\\\icons\\\\v_items\\\\stage_5\\\\lsd.paa",
    "illegal": true,
    "drug": true,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "lsd",
    "localized_name": "LSD",
    "finalWeight": 5,
    "trader": "Drogendealer",
    "steps": [
      {
        "facility": "Drogenküche ab LVL1",
        "inputs": [
          "opium_poppy"
        ],
        "output": "heroin_syringe",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "heroin_syringe",
          "localized_name": "Heroinspritze"
        }
      },
      {
        "facility": "Raffinerie",
        "inputs": [
          "crude_oil"
        ],
        "output": "chemicals",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "chemicals",
          "localized_name": "Chemikalien"
        }
      },
      {
        "facility": "Drogenküche ab LVL2",
        "inputs": [
          "heroin_syringe",
          "chemicals"
        ],
        "output": "lsd",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "lsd",
          "localized_name": "LSD",
          "trader": "Drogendealer"
        }
      }
    ]
  }
});