import {GenericProduction, ProcessingStep, Product} from './production';
import {stone} from "~/items/stone";
import {cement_bag} from "~/items/cement_bag";

// Produktionsschritte
const step1 = new ProcessingStep("Zementwerk", [stone], cement_bag, 3, 3, new Product("cement_bag", "Zementsack", [], 3, "Baustoffhändler"));

// Gesamte Produktion
export const cementBagProduction = new GenericProduction(
    "Zementsack",
    "Cement Bag",
    [stone],
    [step1],
    3,
    "Baustoffhändler"
);