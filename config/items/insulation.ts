import { defineItem } from '../item-registry';

export default defineItem('insulation', {
  "item": {
    "name": "insulation",
    "localized_name": "Wärmedämmung",
    "weight": 5,
    "source": "Baustofffabrik"
  },
  "production": {
    "name": "thermal_insulation",
    "localized_name": "Wärmedämmung",
    "finalWeight": 5,
    "trader": "Baustoffhändler",
    "steps": [
      {
        "facility": "Hochofen/Erzhütte",
        "inputs": [
          "alu_ore"
        ],
        "output": "alu_bar",
        "outputWeight": 3,
        "intermediateProduct": {
          "name": "alu_bar",
          "localized_name": "Alubarren"
        }
      },
      {
        "facility": "Baumwollverarbeiter",
        "inputs": [
          "cotton_fibers"
        ],
        "output": "cotton",
        "outputWeight": 2,
        "intermediateProduct": {
          "name": "cotton",
          "localized_name": "Bauwolle"
        }
      },
      {
        "facility": "Baustofffabrik",
        "inputs": [
          "aluminum_r",
          "cotton"
        ],
        "output": "thermal_insulation",
        "outputWeight": 5,
        "intermediateProduct": {
          "name": "thermal_insulation",
          "localized_name": "Wärmedämmung",
          "trader": "Baustoffhändler"
        }
      }
    ]
  }
});