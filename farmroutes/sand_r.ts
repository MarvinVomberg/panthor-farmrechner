import {GenericProduction, ProcessingStep, Product} from './production';
import {sand} from "~/items/sand";
import {glass} from "~/items/glass";

const step1 = new ProcessingStep("Brennofen", [sand], glass, 3, 3, new Product("sand_r", "Glas", [], 3, "Baustoffhändler"));

// Gesamte Produktion
export const glassProduction = new GenericProduction(
    "sand_r",
    "Glas",
    [sand],
    [step1],
    3,
    "Baustoffhändler"
);
