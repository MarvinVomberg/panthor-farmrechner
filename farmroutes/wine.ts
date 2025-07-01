import {GenericProduction, ProcessingStep, Product} from './production';
import {grapes} from "~/items/grapes";
import {grape_juice} from "~/items/grape_juice";
import {wine} from "~/items/wine";

// Produktionsschritte
const step1 = new ProcessingStep("Saftpresse", [grapes], grape_juice, 3, 3, new Product("grape_juice", "Traubensaft", [], 3));
const step2 = new ProcessingStep("Winzerei", [grape_juice], wine, 2, 2, new Product("wine", "Wein", [], 2, "Sascha's Bar"));

// Gesamte Produktion
export const wineProduction = new GenericProduction(
    "wine",
    "Wein",
    [grapes],
    [step1, step2],
    2,
    "Sascha's Bar"
);