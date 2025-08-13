import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const SilencerCase = new CraftItem(
    'silencer_case',
    'Gehäuse (Schalldämpfer)',
    10,
    [
        new CraftMaterial(6, farmroutes.steel_r),
        new CraftMaterial(10, farmroutes.chemicals),
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(2, farmroutes.titanium_r),
    ]
)