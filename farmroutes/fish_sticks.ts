import {GenericProduction, ProcessingStep, Product} from './production';
import {wheat_flour} from "~/items/wheat_flour";
import {wheat} from "~/items/wheat";
import {trout_sturgeon} from "~/items/trout_sturgeon";
import {fish_filet} from "~/items/fish_filet";
import {fish_sticks} from "~/items/fish_sticks";

// Produktionsschritte
const step1 = new ProcessingStep("Fischverarbeitung", [trout_sturgeon], fish_filet, 2, 2, new Product("fishfilet", "Fischfilet", [], 2));
const step2 = new ProcessingStep("Mühle", [wheat], wheat_flour, 3, 3, new Product("wheat_r", "Weizenmehl", [], 3));
const step3 = new ProcessingStep("Fischverarbeitung", [fish_filet, wheat_flour], fish_sticks, 3, 3,
    new Product("fishsticks", "Fischstäbchen", [], 3, "Fischmarkt"));

// Gesamte Produktion
export const fishSticksProduction = new GenericProduction(
    "fishsticks",
    "Fischstäbchen",
    [trout_sturgeon, wheat],
    [step1, step2, step3],
    3,
    "Fischmarkt"
);