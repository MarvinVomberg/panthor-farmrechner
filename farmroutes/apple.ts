import {GenericProduction, ProcessingStep, Product} from './production';
import {apple} from "~/items/apple";

// Produktionsschritte
const step1 = new ProcessingStep("Supermarkt", [], apple, 2, 2, new Product("apple", "Apfel", [], 2, "Supermarkt"));

// Gesamte Produktion
export const appleProduction = new GenericProduction(
    "apple",
    "Apfel",
    [apple],
    [step1],
    2,
    "Supermarkt",
);