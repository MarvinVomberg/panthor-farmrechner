import { GenericProduction, RawMaterial, ProcessingStep, Product } from './production';
import {precious_metal_scrap} from "~/items/precious_metal_scrap";
import {precious_metals_r} from "~/items/precious_metals_r";

// Produktionsschritte
const step1 = new ProcessingStep("Recyclingwerk", [precious_metal_scrap], precious_metals_r, 4, 4, new Product("precious_metal_r", "Edelmetalle", [], 4, "Metallhändler"));

// Gesamte Produktion
export const preciousMetalsProduction = new GenericProduction(
    "precious_metal_r",
    "Edelmetalle",
    [precious_metal_scrap],
    [step1],
    4,
    "Metallhändler"
);