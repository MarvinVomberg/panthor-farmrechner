import { GenericProduction, RawMaterial, ProcessingStep, Product } from './production';
import {precious_metal_scrap} from "~/items/precious_metal_scrap";
import {precious_metals_r} from "~/items/precious_metals_r";
import {jewelry} from "~/items/jewelry";

// Produktionsschritte
const step1 = new ProcessingStep("Recyclingwerk", [precious_metal_scrap], precious_metals_r, 4, 4, new Product("precious_metals_r", "Edelmetalle", [], 4));
const step2 = new ProcessingStep("Schmuckwerkstatt", [precious_metals_r], jewelry, 3, 3, new Product("jewelry", "Schmuck", [], 3, "Exporthändler"));

// Gesamte Produktion
export const jewelryProduction = new GenericProduction(
    "jewellery",
    "Schmuck",
    [precious_metals_r],
    [step1, step2],
    3,
    "Exporthändler"
);