import {GenericProduction, ProcessingStep, Product} from './production';
import {cotton_fibers} from "~/items/cotton_fibers";
import {cotton} from "~/items/cotton";

// Produktionsschritte
const step1 = new ProcessingStep("Baumwollverarbeiter", [cotton_fibers], cotton, 2, 2, new Product("cotton", "Baumwolle", [], 2, "Exporthändler"));

// Gesamte Produktion
export const cottonProduction = new GenericProduction(
    "cotton",
    "Baumwolle",
    [cotton_fibers],
    [step1],
    2,
    "Exporthändler"
);