import { defineItem } from '../item-registry';

export default defineItem('iron_bar', {
  "item": {
    "name": "iron_bar",
    "localized_name": "Eisenbarren",
    "weight": 3,
    "source": "Hochofen/Erzhütte"
  },
  "production": {
    "name": "iron_r",
    "localized_name": "Eisenbarren",
    "finalWeight": 3,
    "trader": "Metallhändler",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "iron_ore"
        ],
        "output": "iron_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "iron_bar",
          "localized_name": "Eisenbarren",
          "trader": "Metallhändler"
        }
      }
    ]
  }
});