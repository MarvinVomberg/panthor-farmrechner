import {GenericProduction, ProcessingStep, Product} from './production';
import {sugar_beet} from "~/items/sugar_beet";
import {sugar} from "~/items/sugar";

// Produktionsschritte
const step1 = new ProcessingStep("Zuckerraffinerie", [sugar_beet], sugar, 2, 2, new Product("sugar", "Zucker", [], 2, "Backwarenladen"));

// Gesamte Produktion
export const sugarProduction = new GenericProduction(
    "sugar",
    "Zucker",
    [sugar_beet],
    [step1],
    2,
    "Backwarenladen"
);