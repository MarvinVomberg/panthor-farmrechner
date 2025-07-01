import {GenericProduction, ProcessingStep, Product} from './production';
import {wheat} from "~/items/wheat";
import {wheat_mash} from "~/items/wheat_mash";
import {grainbooze} from "~/items/grainbooze";

// Produktionsschritte
const step1 = new ProcessingStep("Maische", [wheat], wheat_mash, 3, 3, new Product("wheat_mash", "Weizen Maische", [], 3));
const step2 = new ProcessingStep("Distellerie", [wheat_mash], grainbooze, 3, 3, new Product("corn", "Korn", [], 3, "Sascha's Bar"));

// Gesamte Produktion
export const grainboozeProduction = new GenericProduction(
    "grainbooze",
    "Korn",
    [wheat],
    [step1, step2],
    3,
    "Sascha's Bar"
);