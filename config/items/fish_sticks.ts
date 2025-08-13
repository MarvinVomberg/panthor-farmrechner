import { defineItem } from '../item-registry';

export default defineItem('fish_sticks', {
  "item": {
    "name": "fish_sticks",
    "localized_name": "Fischstäbchen",
    "weight": 3,
    "source": "Fischverarbeitung"
  },
  "production": {
    "name": "fishsticks",
    "localized_name": "Fischstäbchen",
    "finalWeight": 3,
    "trader": "Fischmarkt",
    "steps": [
      {
        "facility": "Fischverarbeitung",
        "inputs": [
          "trout_sturgeon"
        ],
        "output": "fishfilet",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "fishfilet",
          "localized_name": "Fischfilet"
        }
      },
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
        "facility": "Fischverarbeitung",
        "inputs": [
          "fishfilet",
          "wheat_r"
        ],
        "output": "fishsticks",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "fishsticks",
          "localized_name": "Fischstäbchen",
          "trader": "Fischmarkt"
        }
      }
    ]
  }
});