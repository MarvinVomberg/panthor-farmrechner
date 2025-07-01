import {GenericProduction, ProcessingStep, Product} from './production';
import {copper_ore} from "~/items/copper_ore";
import {crude_oil} from "~/items/crude_oil";
import {cable} from "~/items/cable";
import {rubber} from "~/items/rubber";
import {copper_r} from "~/items/copper_r";

// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [copper_ore], copper_r, 3, 3, new Product("copper_r", "Kupferbarren", [], 3));
const step2 = new ProcessingStep("Kunststofffabrik", [crude_oil], rubber, 4, 4, new Product("rubber", "Gummi", [], 4));
const step3 = new ProcessingStep("Montagefabrik", [copper_r, rubber], cable, 5, 5,
    new Product("cable", "Kabel", [], 5, "Exporthändler"));

// Gesamte Produktion
export const cableProduction = new GenericProduction(
    "cable",
    "kabel",
    [copper_ore, crude_oil],
    [step1, step2, step3],
    5,
    "Exporthändler"
);