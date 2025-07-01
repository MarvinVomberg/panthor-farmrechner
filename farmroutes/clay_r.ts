import {GenericProduction, ProcessingStep, Product} from './production';
import {clay} from "~/items/clay";
import {clay_r} from "~/items/clay_r";

// Produktionsschritte
const step1 = new ProcessingStep("Brennofen", [clay], clay_r, 4, 4, new Product("clay_r", "Ziegel", [], 4, "Baustoffhändler"));

// Gesamte Produktion
export const brickProduction = new GenericProduction(
    "clay_r",
    "Ziegel",
    [clay],
    [step1],
    4,
    "Baustoffhändler"
);