import {GenericProduction, ProcessingStep, Product} from './production';
import {opium_poppy} from "~/items/opium_poppy";
import {crude_oil} from "~/items/crude_oil";
import {chemicals} from "~/items/chemicals";
import {heroin_syringe} from "~/items/heroin_syringe";
import {lsd} from "~/items/lsd";

// Produktionsschritte
const step1 = new ProcessingStep("Drogenküche ab LVL1", [opium_poppy], heroin_syringe, 4, 4, new Product("heroin_syringe", "Heroinspritze", [], 4));
const step2 = new ProcessingStep("Raffinerie", [crude_oil], chemicals, 4, 4, new Product("chemicals", "Chemikalien", [], 4));
const step3 = new ProcessingStep("Drogenküche ab LVL2", [heroin_syringe, chemicals], lsd, 5, 5,
    new Product("LSD", "LSD", [], 5, "Drogendealer"));

// Gesamte Produktion
export const lsdProduction = new GenericProduction(
    "LSD",
    "LSD",
    [opium_poppy, crude_oil],
    [step1, step2, step3],
    5,
    "Drogendealer"
);