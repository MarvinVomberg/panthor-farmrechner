import {GenericProduction, ProcessingStep, Product} from './production';
import {apple} from "~/items/apple";
import {wheat} from "~/items/wheat";
import {wheat_flour} from "~/items/wheat_flour";
import {applepie} from "~/items/applepie";


// Produktionsschritte
const step1 = new ProcessingStep("Mühle", [wheat], wheat_flour, 3, 3, new Product("wheat_r", "Weizenmehl", [], 3));
const step2 = new ProcessingStep("Groß-bäckerei", [apple, wheat_flour], applepie, 4, 4,
    new Product("applepie", "Apfelkuchen", [], 4, "Backwarenladen"));

// Gesamte Produktion
export const applePieProduction = new GenericProduction(
    "applepie",
    "Apfelkuchen",
    [apple, wheat],
    [step1, step2],
    4,
    "Backwarenladen"
);