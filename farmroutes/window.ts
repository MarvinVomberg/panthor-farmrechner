import {GenericProduction, ProcessingStep, Product} from './production';
import {crude_oil} from "~/items/crude_oil";
import {plastic} from "~/items/plastic";
import {sand} from "~/items/sand";
import {glass} from "~/items/glass";
import {windows} from "~/items/windows";

// Produktionsschritte
const step1 = new ProcessingStep("Brennofen", [sand], glass, 3, 3, new Product("glass", "Glas", [], 3));
const step2 = new ProcessingStep("Kunststofffabrik", [crude_oil], plastic, 3, 3, new Product("plastic", "Plastik", [], 3));
const step3 = new ProcessingStep("Montagefabrik", [glass, plastic], windows, 5, 5,
    new Product("window", "Fenster", [], 5, "Exporthändler"));

// Gesamte Produktion
export const windowProduction = new GenericProduction(
    "window",
    "Fenster",
    [sand, crude_oil],
    [step1, step2, step3],
    5,
    "Exporthändler"
);