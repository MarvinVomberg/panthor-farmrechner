import {GenericProduction, ProcessingStep, Product} from './production';
import {wheat} from "~/items/wheat";
import {wheat_flour} from "~/items/wheat_flour";

// Produktionsschritte
const step1 = new ProcessingStep("Mühle", [wheat], wheat_flour, 3, 3, new Product("wheat_r", "Weizenmehl", [], 3, "Backwarenladen"));

// Gesamte Produktion
export const wheatFlourProduction = new GenericProduction(
    "wheat_r",
    "Weizenmehl",
    [wheat],
    [step1],
    3,
    "Backwarenladen"
);