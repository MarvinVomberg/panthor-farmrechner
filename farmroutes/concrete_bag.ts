import {GenericProduction, ProcessingStep, Product} from './production';
import {stone} from "~/items/stone";
import {cement_bag} from "~/items/cement_bag";
import {concrete_bag} from "~/items/concrete_bag";

// Produktionsschritte
const step1 = new ProcessingStep("Zementwerk", [stone], cement_bag, 3, 3, new Product("cement_bag", "Zementsack", [], 3));
const step2 = new ProcessingStep("Baustofffabrik", [cement_bag], concrete_bag, 5, 5,
    new Product("Betonsack", "Concrete Bag", [], 5, "Baustoffhändler"));

// Gesamte Produktion
export const concreteBagProduction = new GenericProduction(
    "concrete_bag",
    "Betonsack",
    [stone],
    [step1, step2],
    5,
    "Baustoffhändler"
);