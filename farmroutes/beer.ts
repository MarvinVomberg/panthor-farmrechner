import {GenericProduction, ProcessingStep, Product} from './production';
import {hops} from "~/items/hops";
import {barley} from "~/items/barley";
import {malt} from "~/items/malt";
import {beer} from "~/items/beer";

// Produktionsschritte
const step1 = new ProcessingStep("Mälzerei", [barley, malt], 3, 3, new Product("malt", "Malz", [], 3));
const step2 = new ProcessingStep("Brauerei", [hops, malt], beer, 3, 3,
    new Product("beer", "Bier", [], 3, "Sascha's Bar"));

// Gesamte Produktion
export const beerProduction = new GenericProduction(
    "beer",
    "Bier",
    [hops, barley],
    [step1, step2],
    3,
    "Sascha's Bar"
);