import {GenericProduction, ProcessingStep, Product} from './production';
import {apple} from "~/items/apple";
import {apple_juice} from "~/items/apple_juice";

// Produktionsschritte
const step1 = new ProcessingStep("Saftpresse", [apple], apple_juice, 3, 3, new Product("apple_juice", "Apfelsaft", [], 3, "Saftladen"));

// Gesamte Produktion
export const appleJuiceProduction = new GenericProduction(
    "apple_juice",
    "Apfelsaft",
    [apple],
    [step1],
    3,
    "Saftladen"
);