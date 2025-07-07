import {CraftItem, CraftMaterial} from "~/types/crafting"
import {steelBarProduction} from "~/farmroutes/steel_r";
import {chemicalsProduction} from "~/farmroutes/chemicals";
import {rubberProduction} from "~/farmroutes/rubber";
import {titaniumBarProduction} from "~/farmroutes/titanium_r";

export const SilencerCase = new CraftItem(
    'silencer_case',
    'Gehäuse (Schalldämpfer)',
    10,
    [
        new CraftMaterial(6, steelBarProduction),
        new CraftMaterial(10, chemicalsProduction),
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(2, titaniumBarProduction),
    ]
)