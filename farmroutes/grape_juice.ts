import {GenericProduction, ProcessingStep, Product} from './production';
import {grapes} from "~/items/grapes";
import {grape_juice} from "~/items/grape_juice";


// Produktionsschritte
const step1 = new ProcessingStep("Saftpresse", [grapes], grape_juice, 3, 3, new Product("grape_juice", "Traubensaft", [], 3, "Saftladen"));

// Gesamte Produktion
export const grapeJuiceProduction = new GenericProduction(
    "grape_juice",
    "Traubensaft",
    [grapes],
    [step1],
    3,
    "Saftladen"
);