import {GenericProduction, ProcessingStep, Product} from './production';
import {crude_oil} from "~/items/crude_oil";
import {chemicals} from "~/items/chemicals";

const step1 = new ProcessingStep("Raffinerie", [crude_oil], chemicals, 4, 4, new Product("chemicals", "Chemikalien", [], 4));

// Gesamte Produktion
export const chemicalsProduction = new GenericProduction(
    "chemicals",
    "Chemikalien",
    [crude_oil],
    [step1],
    4
);
