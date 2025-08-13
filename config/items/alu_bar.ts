import { defineItem } from '../item-registry';

export default defineItem('alu_bar', {
  "item": {
    "name": "alu_bar",
    "localized_name": "alu_bar",
    "weight": 1
  },
  "production": {
    "name": "aluminum_r",
    "localized_name": "Alubarren",
    "finalWeight": 3,
    "trader": "Metallhändler",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "alu_ore"
        ],
        "output": "aluminum_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "aluminium_r",
          "localized_name": "Alubarren",
          "trader": "Metallhändler"
        }
      }
    ]
  }
});