import {GenericProduction, ProcessingStep, Product} from './production';
import {crude_oil} from "~/items/crude_oil";
import {bandages} from "~/items/bandages";
import {raw_fentanyl} from "~/items/raw_fentanyl";
import {plastic} from "~/items/plastic";
import {fentanyl_syringe} from "~/items/fentanyl_syringe";

// Produktionsschritte
const step1 = new ProcessingStep("Wohnmobil", [bandages], raw_fentanyl, 5, 5, new Product("unverarbeitetes Fentanyl", "Raw Fentanyl", [], 5));
const step2 = new ProcessingStep("Kunststofffabrik", [crude_oil], plastic, 3, 3, new Product("Plastik", "Plastic", [], 3));
const step3 = new ProcessingStep("Drogenküche ab LVL2", [raw_fentanyl, plastic], fentanyl_syringe, 4, 4,
    new Product("fentanyl_r", "Fentanyl-Spritze", [], 4, "Drogendealer"));

// Gesamte Produktion
export const fentanylSyringeProduction = new GenericProduction(
    "fentanyl_r",
    "Fentanyl-Spritze",
    [bandages, crude_oil],
    [step1, step2, step3],
    4,
    "Drogendealer"
);