import {GenericProduction, ProcessingStep, Product} from './production';
import {honey_comb} from "~/items/honey_comb";
import {honey} from "~/items/honey";

// Produktionsschritte
const step1 = new ProcessingStep("Imker", [honey_comb], honey, 2, 2, new Product("honey_r", "Honig", [], 2, "Supermarkt"));

// Gesamte Produktion
export const honeyProduction = new GenericProduction(
    "honey_r",
    "Honig",
    [honey_comb],
    [step1],
    2,
    "Supermarkt"
);