import {GenericProduction, ProcessingStep, Product} from './production';
import {stone} from "~/items/stone";
import {concrete} from "~/items/concrete";

// Produktionsschritte
const step1 = new ProcessingStep("Zementwerk", [stone], concrete, 3, 3, new Product("concrete", "Zementsack", [], 3, "Baustoffhändler"));

// Gesamte Produktion
export const concreteProduction = new GenericProduction(
    "concrete",
    "Zementsack",
    [stone],
    [step1],
    3,
    "Baustoffhändler"
);