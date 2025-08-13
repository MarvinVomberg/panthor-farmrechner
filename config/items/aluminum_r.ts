import { defineItem } from '../item-registry';

export default defineItem('aluminum_r', {
  "item": {
    "name": "aluminum_r",
    "localized_name": "Alubarren",
    "weight": 3,
    "source": "Hochofen/Erzhütte",
    "sellPrice": 290,
    "market": 0,
    "illegal": false,
    "drug": false,
    "exp": 0,
    "buyPrice": -1,
    "tool": "",
    "eventItem": false,
    "shredderAble": 0
  },
  "production": {
    "name": "aluminum_r",
    "localized_name": "Alubarren",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "alu_ore"
        ],
        "output": "aluminum_r",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "aluminum_r",
          "localized_name": "Alubarren",
          "trader": "Metallhändler"
        }
      }
    ],
    "finalWeight": 3,
    "trader": "Metallhändler"
  }
});