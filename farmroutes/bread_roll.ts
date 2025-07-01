import {GenericProduction, ProcessingStep, Product} from './production';
import {wheat} from "~/items/wheat";
import {wheat_flour} from "~/items/wheat_flour";
import {roll} from "~/items/roll";

// Produktionsschritte
const step1 = new ProcessingStep("Mühle", [wheat], wheat_flour, 3, 3, new Product("wheat_flour", "Weizenmehl", [], 3));
const step2 = new ProcessingStep("Bäckerei", [wheat_flour], roll, 2, 2, new Product("roll", "Brötchen", [], 2, "Backwarenladen"));

// Gesamte Produktion
export const rollProduction = new GenericProduction(
    "roll",
    "Brötchen",
    [wheat],
    [step1, step2],
    2,
    "Backwarenladen"
);