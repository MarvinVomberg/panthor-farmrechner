import {GenericProduction, ProcessingStep, Product} from './production';
import {apple} from "~/items/apple";
import {scrap} from "~/items/scrap";

// Produktionsschritte
const step1 = new ProcessingStep("Schrottplatz", [], scrap, 4, 4, new Product("scrap", "Schrott", [], 4, "Schrottplatz"));

// Gesamte Produktion
export const scrapProduction = new GenericProduction(
    'scrap',
    "Schrott",
    [scrap],
    [step1],
    4,
    "Schrottplatz",
);