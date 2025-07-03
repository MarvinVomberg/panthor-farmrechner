import {GenericProduction, ProcessingStep, Product} from './production';
import {wood} from "~/items/wood";
import {wood_r} from "~/items/wood_r";

const step1 = new ProcessingStep("Sägewerk", [wood], wood_r, 5, 4, new Product("wood_r", "Bretter", [], 4, "Holzhandel"));

// Gesamte Produktion
export const boardsProduction = new GenericProduction(
    "wood_r",
    "Bretter",
    [wood],
    [step1],
    4,
    "Holzhandel"
);
