import { GenericProduction, RawMaterial, ProcessingStep, Product } from './production';
import {leather} from "~/items/leather";
import {animal_hides} from "~/items/animal_hides";

// Produktionsschritte
const step1 = new ProcessingStep("Schneider/Wohnmobil", [animal_hides], leather, 3, 3, new Product("Leder", "Leather", [], 3, "Crafting"));

// Gesamte Produktion
export const leatherProduction = new GenericProduction(
    "leather",
    "Leder",
    [animal_hides],
    [step1],
    3,
    "Crafting"
);