import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const SilencerThread = new CraftItem(
    'silencer_thread',
    'Gewinde (Schalldämpfer)',
    10,
    [
        new CraftMaterial(3, farmroutes.iron_bar),
        new CraftMaterial(4, farmroutes.copper_r),
        new CraftMaterial(3, farmroutes.aluminum_r),
        new CraftMaterial(2, farmroutes.titanium_r),
    ]
)