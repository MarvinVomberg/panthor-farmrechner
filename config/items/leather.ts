import { defineItem } from '../item-registry';

export default defineItem('leather', {
  "item": {
    "name": "leather",
    "localized_name": "Leder",
    "weight": 3,
    "source": "Schneider/Wohnmobil",
    "sellPrice": 1,
    "market": -1,
    "icon": "r\\\\RL\\\\addons\\\\Textures\\\\icons\\\\v_items\\\\stage_h\\\\animal_skins.paa",
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "leather",
    "localized_name": "Leder",
    "finalWeight": 3,
    "trader": "Crafting",
    "steps": [
      {
        "facility": "Schneider/Wohnmobil",
        "inputs": [
          "animal_skins"
        ],
        "output": "leather",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "leather",
          "localized_name": "Leder",
          "trader": "Crafting"
        }
      }
    ]
  }
});