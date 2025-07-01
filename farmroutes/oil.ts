import {GenericProduction, ProcessingStep, Product} from './production';
import {crude_oil} from "~/items/crude_oil";
import {oil} from "~/items/oil";

// Produktionsschritte
const step1 = new ProcessingStep("Raffinerie", [crude_oil], oil, 4, 4, new Product("oil", "Öl", [], 4, "Öllager"));

// Gesamte Produktion
export const oilProduction = new GenericProduction(
    "Öl",
    "Oil",
    [crude_oil],
    [step1],
    4,
    "Öllager"
);