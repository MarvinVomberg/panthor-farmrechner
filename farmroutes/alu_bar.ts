import {GenericProduction, ProcessingStep, Product} from './production';
import {alu_ore} from "~/items/alu_ore";
import {aluminum_r} from "~/items/aluminum_r";

// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [alu_ore], aluminum_r, 3, 3, new Product("aluminium_r", "Alubarren", [], 3, "Metallhändler"));

// Gesamte Produktion
export const aluminumBarProduction = new GenericProduction(
    "aluminum_r",
    "Alubarren",
    [alu_ore],
    [step1],
    3,
    "Metallhändler"
);