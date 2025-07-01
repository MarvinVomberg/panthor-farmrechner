import {GenericProduction, ProcessingStep, Product} from './production';
import {raw_meat} from "~/items/raw_meat";
import {meat_r} from "~/items/meat_r";

// Produktionsschritte
const step1 = new ProcessingStep("Lagerfeuer", [raw_meat], meat_r, 3, 3, new Product("meat_r", "Fleisch", [], 3, "Supermarkt"));

// Gesamte Produktion
export const meatProduction = new GenericProduction(
    "meat_r",
    "Fleisch",
    [raw_meat],
    [step1],
    3,
    "Supermarkt"
);