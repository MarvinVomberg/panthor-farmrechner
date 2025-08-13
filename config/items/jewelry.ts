import { defineItem } from '../item-registry';

export default defineItem('jewelry', {
  "item": {
    "name": "jewelry",
    "localized_name": "Schmuck",
    "weight": 3,
    "source": "Schmuckwerkstatt"
  },
  "production": {
    "name": "jewellery",
    "localized_name": "Schmuck",
    "finalWeight": 3,
    "trader": "Exporthändler",
    "steps": [
      {
        "facility": "Recyclingwerk",
        "inputs": [
          "precious_metal_scrap"
        ],
        "output": "precious_metals_r",
        "outputWeight": 4,
        "intermediateProduct": {
          "name": "precious_metals_r",
          "localized_name": "Edelmetalle"
        }
      },
      {
        "facility": "Schmuckwerkstatt",
        "inputs": [
          "precious_metals_r"
        ],
        "output": "jewellery",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "jewelry",
          "localized_name": "Schmuck",
          "trader": "Exporthändler"
        }
      }
    ]
  }
});