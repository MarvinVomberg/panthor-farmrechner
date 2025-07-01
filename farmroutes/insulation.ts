import {GenericProduction, ProcessingStep, Product} from './production';
import {alu_ore} from "~/items/alu_ore";
import {cotton_fibers} from "~/items/cotton_fibers";
import {aluminum_r} from "~/items/aluminum_r";
import {cotton} from "~/items/cotton";
import {insulation} from "~/items/insulation";

// Produktionsschritte
const step1 = new ProcessingStep("Hochofen/Erzhütte", [alu_ore], aluminum_r, 3, 3, new Product("alu_bar", "Alubarren", [], 3));
const step2 = new ProcessingStep("Baumwollverarbeiter", [cotton_fibers], cotton, 2, 2, new Product("cotton", "Bauwolle", [], 2));
const step3 = new ProcessingStep("Baustofffabrik", [aluminum_r, cotton], insulation, 5, 5,
    new Product("Wärmedämmung", "Insulation", [], 5, "Baustoffhändler"));

// Gesamte Produktion
export const insulationProduction = new GenericProduction(
    "Wärmedämmung",
    "Insulation",
    [alu_ore, cotton_fibers],
    [step1, step2, step3],
    5,
    "Baustoffhändler"
);