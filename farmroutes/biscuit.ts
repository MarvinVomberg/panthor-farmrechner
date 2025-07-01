import {GenericProduction, ProcessingStep, Product} from './production';
import {wheat} from "~/items/wheat";
import {wheat_flour} from "~/items/wheat_flour";
import {rye} from "~/items/rye";
import {sugar_beet} from "~/items/sugar_beet";
import {sugar} from "~/items/sugar";
import {rye_flour} from "~/items/rye_flour";
import {biscuit} from "~/items/biscuit";

// Produktionsschritte
const step1 = new ProcessingStep("Mühle", [wheat], wheat_flour, 3, 3, new Product("wheat_r", "Weizenmehl", [], 3));
const step2 = new ProcessingStep("Mühle", [rye], rye_flour, 3, 3, new Product("Roggenmehl", "Rye Flour", [], 3));
const step3 = new ProcessingStep("Zuckerraffinerie", [sugar_beet], sugar, 2, 2, new Product("Zucker", "Sugar", [], 2));
const step4 = new ProcessingStep("Groß-bäckerei", [wheat_flour, rye_flour, sugar], biscuit, 8, 8,
    new Product("biscuit", "Keks", [], 8, "Backwarenladen"));

// Gesamte Produktion
export const biscuitProduction = new GenericProduction(
    "biscuit",
    "Keks",
    [wheat, rye, sugar_beet],
    [step1, step2, step3, step4],
    8,
    "Backwarenladen"
);