import {GenericProduction, ProcessingStep, Product} from './production';
import {iron_ore} from "~/items/iron_ore";
import {wood} from "~/items/wood";
import {wood_r} from "~/items/wood_r";
import {iron_bar} from "~/items/iron_bar";
import {door} from "~/items/door";

// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [iron_ore], iron_bar, 3, 3, new Product("Eisenbarren", "Iron Bar", [], 3));
const step2 = new ProcessingStep("Sägewerk", [wood], wood_r, 4, 4, new Product("Bretter", "Boards", [], 4));
const step3 = new ProcessingStep("Montagefabrik", [iron_bar, wood_r], door, 5, 5,
    new Product("Tür", "Door", [], 5, "Exporthändler"));

// Gesamte Produktion
export const doorProduction = new GenericProduction(
    "Tür",
    "Door",
    [iron_ore, wood],
    [step1, step2, step3],
    5,
    "Exporthändler"
);