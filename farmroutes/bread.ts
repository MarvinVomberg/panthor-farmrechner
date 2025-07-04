import {GenericProduction, ProcessingStep, Product} from './production';
import {rye} from "~/items/rye";
import {rye_r} from "~/items/rye_r";
import {bread} from "~/items/bread";

// Produktionsschritte
const step1 = new ProcessingStep("Mühle", [rye], rye_r, 3, 3, new Product("rye_flour", "Roggenmehl", [], 3));
const step2 = new ProcessingStep("Bäckerei", [rye_r], bread, 2, 2, new Product("bread", "Brot", [], 2, "Backwarenladen"));

// Gesamte Produktion
export const breadProduction = new GenericProduction(
    "bread",
    "Brot",
    [rye],
    [step1, step2],
    2,
    "Backwarenladen"
);
