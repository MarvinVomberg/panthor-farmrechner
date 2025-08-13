import { defineItem } from '../item-registry';

export default defineItem('steel_r', {
  "item": {
    "name": "steel_r",
    "localized_name": "Stahlbarren",
    "weight": 5,
    "source": "Hochofen/Erzhütte"
  },
  "production": {
    "name": "steel_r",
    "localized_name": "Stahl",
    "finalWeight": 5,
    "trader": "Metallhändler",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "iron_ore"
        ],
        "output": "iron_bar",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "iron_bar",
          "localized_name": "Eisenbarren"
        }
      },
      {
        "facility": "Köhlerei",
        "inputs": [
          "wood"
        ],
        "output": "charcoal",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "charcoal",
          "localized_name": "Holzkohle"
        }
      },
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "iron_bar",
          "charcoal_r"
        ],
        "output": "steel_r",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "steel_r",
          "localized_name": "Stahl",
          "trader": "Metallhändler"
        }
      }
    ]
  }
});