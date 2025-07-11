import {GenericProduction, ProcessingStep, Product} from './production';
import {rye} from "~/items/rye";
import {rye_r} from "~/items/rye_r";
import {grapes} from "~/items/grapes";
import {grapecake} from "~/items/grapecake";


// Produktionsschritte
const step1 = new ProcessingStep("Mühle", [rye], rye_r, 3, 3, new Product("rye_flour", "Roggenmehl", [], 3));
const step2 = new ProcessingStep("Groß-bäckerei", [grapes, rye_r], grapecake, 4, 4,
    new Product("grapecake", "Traubenkuchen", [], 4, "Backwarenladen"));

// Gesamte Produktion
export const grapeCakeProduction = new GenericProduction(
    "grapecake",
    "Traubenkuchen",
    [grapes, rye],
    [step1, step2],
    4,
    "Backwarenladen"
);