import {GenericProduction, ProcessingStep, Product} from './production';
import {wood} from "~/items/wood";
import {boards} from "~/items/boards";

const step1 = new ProcessingStep("Sägewerk", [wood], boards, 5, 4, new Product("boards", "Bretter", [], 4, "Holzhandel"));

// Gesamte Produktion
export const boardsProduction = new GenericProduction(
    "boards",
    "Bretter",
    [wood],
    [step1],
    4,
    "Holzhandel"
);
