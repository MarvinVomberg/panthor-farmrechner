import {GenericProduction, ProcessingStep, Product} from './production';
import {grapes} from "~/items/grapes";

const step1 = new ProcessingStep("Weintraubenberg", [], grapes, 2, 2, new Product("grapes", "Weintrauben", [], 2));

// Gesamte Produktion
const grapesProduction = new GenericProduction(
    "grapes",
    "Weintrauben",
    [grapes],
    [step1],
    2
);