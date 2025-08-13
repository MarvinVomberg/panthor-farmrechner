import { defineItem } from '../item-registry';

export default defineItem('cotton', {
  "item": {
    "name": "cotton",
    "localized_name": "Baumwolle",
    "weight": 2,
    "source": "Baumwollverarbeiter"
  },
  "production": {
    "name": "cotton",
    "localized_name": "Baumwolle",
    "finalWeight": 2,
    "trader": "Exporthändler",
    "steps": [
      {
        "facility": "Baumwollverarbeiter",
        "inputs": [
          "cotton_fibers"
        ],
        "output": "cotton",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "cotton",
          "localized_name": "Baumwolle",
          "trader": "Exporthändler"
        }
      }
    ]
  }
});