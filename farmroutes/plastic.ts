import {GenericProduction, ProcessingStep, Product} from './production';
import {crude_oil} from "~/items/crude_oil";
import {plastic} from "~/items/plastic";

const step1 = new ProcessingStep("Kunststofffabrik", [crude_oil], plastic, 3, 3, new Product("plastic", "Plastik", [], 3, "Kunststoffhändler"));

// Gesamte Produktion
export const plasticProduction = new GenericProduction(
    "plastic",
    "Plastik",
    [crude_oil],
    [step1],
    3,
    "Kunststoffhändler"
);
