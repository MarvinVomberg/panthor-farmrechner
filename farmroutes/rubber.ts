import {GenericProduction, ProcessingStep, Product} from './production';
import {hops} from "~/items/hops";
import {barley} from "~/items/barley";
import {malt} from "~/items/malt";
import {beer} from "~/items/beer";
import {crude_oil} from "~/items/crude_oil";
import {oil_r} from "~/items/oil_r";

// Produktionsschritte
const step1 = new ProcessingStep("Ölschiff", [crude_oil], oil_r, 5, 5,
    new Product("rubber", "Gummi", [], 4, "Kunststofffabrik"));

// Gesamte Produktion
export const rubberProduction = new GenericProduction(
    "rubber",
    "Gummi",
    [crude_oil],
    [step1],
    4,
    "Kunststofffabrik"
);