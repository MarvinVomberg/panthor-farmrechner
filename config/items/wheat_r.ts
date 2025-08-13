import { defineItem } from '../item-registry';

export default defineItem('wheat_r', {
  "item": {
    "name": "wheat_r",
    "localized_name": "Weizenmehl",
    "weight": 3,
    "source": "Mühle"
  },
  "production": {
    "name": "wheat_r",
    "localized_name": "Weizenmehl",
    "finalWeight": 3,
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
          "localized_name": "Weizenmehl",
          "trader": "Backwarenladen"
        }
      }
    ]
  }
});