import {GenericProduction, ProcessingStep, Product} from './production';
import {rye_mash} from "~/items/rye_mash";
import {rye} from "~/items/rye";
import {vodka} from "~/items/vodka";

// Produktionsschritte
const step1 = new ProcessingStep("Maische", [rye], rye_mash, 3, 3, new Product("rye_mash", "Roggen Maische", [], 3));
const step2 = new ProcessingStep("Distellerie", [rye_mash], vodka, 3, 3, new Product("vodka", "Vodka", [], 3, "Sascha's Bar"));

// Gesamte Produktion
export const vodkaProduction = new GenericProduction(
    "vodka",
    "Vodka",
    [rye],
    [step1, step2],
    3,
    "Sascha's Bar"
);