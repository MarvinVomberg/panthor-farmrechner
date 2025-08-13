import { defineItem } from '../item-registry';

export default defineItem('charcoal', {
  "item": {
    "name": "charcoal",
    "localized_name": "charcoal",
    "weight": 1
  },
  "production": {
    "name": "Holzkohle",
    "localized_name": "Kohle",
    "finalWeight": 3,
    "trader": "Kohlehändler",
    "steps": [
      {
        "facility": "Köhlerei",
        "inputs": [
          "wood"
        ],
        "output": "Holzkohle",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "charcoal_r",
          "localized_name": "Holzkohle",
          "trader": "Kohlehändler"
        }
      }
    ]
  }
});