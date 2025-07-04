import {GenericProduction, ProcessingStep, Product} from './production';
import {rye_r} from "~/items/rye_r";
import {rye} from "~/items/rye";

const step1 = new ProcessingStep("Mühle", [rye], rye_r, 3, 3, new Product("rye_r", "Roggenmehl", [], 3, "Backwarenladen"));

// Gesamte Produktion
export const ryeFlourProduction = new GenericProduction(
    "rye_r",
    "Roggenmehl",
    [rye],
    [step1],
    3,
    "Backwarenladen"
);