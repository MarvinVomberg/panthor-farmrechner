import {GenericProduction, ProcessingStep, Product} from './production';
import {sugar_beet} from "~/items/sugar_beet";
import {sugar} from "~/items/sugar";
import {titanium_ore} from "~/items/titanium_ore";

// Produktionsschritte
const step1 = new ProcessingStep("Titaniumschmelze", [titanium_ore], sugar, 5, 4, new Product("titanium_r", "Titanbarren", [], 4, "Titaniumschmelze"));

// Gesamte Produktion
export const titaniumBarProduction = new GenericProduction(
    "titanium_r",
    "Titanbarren",
    [titanium_ore],
    [step1],
    4,
    "TItanverarbeiter"
);