import {GenericProduction, ProcessingStep, Product} from './production';
import {apple} from "~/items/apple";
import {apple_juice} from "~/items/apple_juice";
import {applewine} from "~/items/applewine";

// Produktionsschritte
const step1 = new ProcessingStep("Saftpresse", [apple], apple_juice, 3, 3, new Product("apple_juice", "Apfelsaft", [], 3));
const step2 = new ProcessingStep("Winzerei", [apple_juice], applewine, 2, 2, new Product("applewine", "Apfelwein", [], 2, "Sascha's Bar"));

// Gesamte Produktion
export const ciderProduction = new GenericProduction(
    "applewine",
    "Apfelwein",
    [apple],
    [step1, step2],
    2,
    "Sascha's Bar"
);