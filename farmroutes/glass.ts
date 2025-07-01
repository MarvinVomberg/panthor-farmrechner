import {GenericProduction, ProcessingStep, Product} from './production';
import {sand} from "~/items/sand";
import {glass} from "~/items/glass";

const step1 = new ProcessingStep("Brennofen", [sand], glass, 3, 3, new Product("glass", "Glas", [], 3, "Baustoffhändler"));

// Gesamte Produktion
export const glassProduction = new GenericProduction(
    "glass",
    "Glas",
    [sand],
    [step1],
    3,
    "Baustoffhändler"
);
