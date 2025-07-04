import {GenericProduction, ProcessingStep, Product} from './production';
import {cotton_fibers} from "~/items/cotton_fibers";
import {tissue} from "~/items/tissue";
import {cotton} from "~/items/cotton";

// Produktionsschritte
const step1 = new ProcessingStep("Baumwollverarbeiter", [cotton_fibers], cotton, 2, 2, new Product("cotton", "Baumwolle", [], 2));
const step2 = new ProcessingStep("Schneider", [cotton], tissue, 3, 3, new Product("tissue", "Gewebe", [], 3, "Exporthändler"));

// Gesamte Produktion
export const tissueProduction = new GenericProduction(
    "tissue",
    "Gewebe",
    [cotton_fibers],
    [step1, step2],
    3,
    "Exporthändler"
);