import {GenericProduction, ProcessingStep, Product} from './production';
import {rye_flour} from "~/items/rye_flour";
import {rye} from "~/items/rye";

const step1 = new ProcessingStep("Mühle", [rye], rye_flour, 3, 3, new Product("rye_flour", "Roggenmehl", [], 3, "Backwarenladen"));

// Gesamte Produktion
export const ryeFlourProduction = new GenericProduction(
    "rye_flour",
    "Roggenmehl",
    [rye],
    [step1],
    3,
    "Backwarenladen"
);