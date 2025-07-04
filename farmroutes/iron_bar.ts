import {GenericProduction, ProcessingStep, Product} from './production';
import {iron_ore} from "~/items/iron_ore";
import {iron_bar} from "~/items/iron_bar";


// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [iron_ore], iron_bar, 3, 3, new Product("iron_bar", "Eisenbarren", [], 3, "Metallhändler"));

// Gesamte Produktion
export const ironBarProduction = new GenericProduction(
    "iron_r",
    "Eisenbarren",
    [iron_ore],
    [step1],
    3,
    "Metallhändler"
);