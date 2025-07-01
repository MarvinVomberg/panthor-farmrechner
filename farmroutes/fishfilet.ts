import { GenericProduction, RawMaterial, ProcessingStep, Product } from './production';
import {fish_filet} from "~/items/fish_filet";
import {trout_sturgeon} from "~/items/trout_sturgeon";

// Produktionsschritte
const step1 = new ProcessingStep("Fischverarbeitung", [trout_sturgeon], fish_filet, 2, 2, new Product("fishfilet", "Fischfilet", [], 2, "Fischmarkt"));

// Gesamte Produktion
export const fishFiletProduction = new GenericProduction(
    "fishfilet",
    "Fischfilet",
    [trout_sturgeon],
    [step1],
    2,
    "Fischmarkt"
);