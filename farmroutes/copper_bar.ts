import {GenericProduction, ProcessingStep, Product} from './production';
import {copper_ore} from "~/items/copper_ore";
import {copper_r} from "~/items/copper_r";

// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [copper_ore], copper_r, 3, 3, new Product("copper_r", "Kupferbarren", [], 3, "Metallhändler"));

// Gesamte Produktion
export const copperBarProduction = new GenericProduction(
    "copper_r",
    "Kupferbarren",
    [copper_ore],
    [step1],
    3,
    "Metallhändler"
);