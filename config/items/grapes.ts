import { defineItem } from '../item-registry';

export default defineItem('grapes', {
  "item": {
    "name": "grapes",
    "localized_name": "Weintrauben",
    "weight": 2,
    "source": "Weintraubenberg"
  },
  "production": {
    "name": "grapes",
    "localized_name": "Weintrauben",
    "finalWeight": 2,
    "steps": [
      {
        "facility": "Weintraubenberg",
        "inputs": [],
        "output": "grapes",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "grapes",
          "localized_name": "Weintrauben"
        }
      }
    ]
  }
});