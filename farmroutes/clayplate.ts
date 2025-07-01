import {GenericProduction, ProcessingStep, Product} from './production';
import {wood} from "~/items/wood";
import {clay} from "~/items/clay";
import {boards} from "~/items/boards";
import {clay_boards} from "~/items/clay_boards";

// Produktionsschritte
const step1 = new ProcessingStep("Sägewerk", [wood], boards, 4, 4, new Product("Bretter", "Boards", [], 4));
const step2 = new ProcessingStep("Baustofffabrik", [clay, boards], clay_boards, 5, 5,
    new Product("clayplate", "Lehmbauplatten", [], 5, "Baustoffhändler"));

// Gesamte Produktion
export const clayplateProduction = new GenericProduction(
    "clayplate",
    "Lehmbauplatten",
    [clay, wood],
    [step1, step2],
    5,
    "Baustoffhändler"
);