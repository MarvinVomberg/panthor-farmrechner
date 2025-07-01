import {GenericProduction, ProcessingStep, Product} from './production';
import {apple} from "~/items/apple";
import {grapes} from "~/items/grapes";
import {apple_juice} from "~/items/apple_juice";
import {grape_juice} from "~/items/grape_juice";
import {moonshiner} from "~/items/moonshiner";

// Produktionsschritte
const step1 = new ProcessingStep("Saftpresse", [apple], apple_juice, 3, 3, new Product("apple_juice", "Apfelsaft", [], 3));
const step2 = new ProcessingStep("Saftpresse", [grapes], grape_juice, 3, 3, new Product("grape_juice", "Traubensaft", [], 3));
const step3 = new ProcessingStep("Badewanne", [apple_juice, grape_juice], moonshiner, 6, 6,
    new Product("moonshiner", "Moonshiner", [], 6, "Sascha's Bar"));

// Gesamte Produktion
export const moonshinerProduction = new GenericProduction(
    "moonshiner",
    "Moonshiner",
    [apple, grapes],
    [step1, step2, step3],
    6,
    "Sascha's Bar"
);