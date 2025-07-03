import { GenericProduction, RawMaterial, ProcessingStep, Product } from './production';
import {leather} from "~/items/leather";
import {animal_skins} from "~/items/animal_skins";

// Produktionsschritte
const step1 = new ProcessingStep("Schneider/Wohnmobil", [animal_skins], leather, 3, 3, new Product("leather", "Leder", [], 3, "Crafting"));

// Gesamte Produktion
export const leatherProduction = new GenericProduction(
    "leather",
    "Leder",
    [animal_skins],
    [step1],
    3,
    "Crafting"
);