import {GenericProduction, ProcessingStep, Product} from './production';
import {crude_oil} from "~/items/crude_oil";
import {oil_r} from "~/items/oil_r";

// Produktionsschritte
const step1 = new ProcessingStep("Raffinerie", [crude_oil], oil_r, 4, 4, new Product("oil_r", "Öl", [], 4, "Öllager"));

// Gesamte Produktion
export const oilProduction = new GenericProduction(
    "oil_r",
    "Öl",
    [crude_oil],
    [step1],
    4,
    "Öllager"
);