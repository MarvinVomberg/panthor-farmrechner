import {GenericProduction, ProcessingStep, Product} from './production';
import {iron_ore} from "~/items/iron_ore";
import {wood} from "~/items/wood";
import {iron_bar} from "~/items/iron_bar";
import {charcoal_r} from "~/items/charcoal_r";
import {steel_bar} from "~/items/steel_bar";

// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [iron_ore], iron_bar, 3, 3, new Product("iron_bar", "Eisenbarren", [], 3));
const step2 = new ProcessingStep("Köhlerei", [wood], charcoal_r, 3, 3, new Product("charcoal", "Holzkohle", [], 3));
const step3 = new ProcessingStep("Hochofen/Erzhütte", [iron_bar, charcoal_r], steel_bar, 5, 5,
    new Product("Stahlbarren", "Steel Bar", [], 5, "Metallhändler"));

// Gesamte Produktion
export const steelBarProduction = new GenericProduction(
    "Stahlbarren",
    "Steel Bar",
    [iron_ore, wood],
    [step1, step2, step3],
    5,
    "Metallhändler"
);
