import { defineItem } from '../item-registry';

export default defineItem('bread_roll', {
  "item": {
    "name": "bread_roll",
    "localized_name": "bread_roll",
    "weight": 1
  },
  "production": {
    "name": "roll",
    "localized_name": "Brötchen",
    "finalWeight": 2,
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
        "facility": "Bäckerei",
        "inputs": [
          "wheat_r"
        ],
        "output": "roll",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "roll",
          "localized_name": "Brötchen",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});