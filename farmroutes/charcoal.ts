import {GenericProduction, ProcessingStep, Product} from './production';
import {wood} from "~/items/wood";
import {charcoal_r} from "~/items/charcoal_r";

// Produktionsschritte
const step1 = new ProcessingStep("Köhlerei", [wood], charcoal_r, 3, 3, new Product("charcoal_r", "Holzkohle", [], 3, "Kohlehändler"));

// Gesamte Produktion
export const charcoalProduction = new GenericProduction(
    "Holzkohle",
    "Kohle",
    [wood],
    [step1],
    3,
    "Kohlehändler"
);