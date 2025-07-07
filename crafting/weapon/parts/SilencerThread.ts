import {CraftItem, CraftMaterial} from "~/types/crafting"
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";
import {titaniumBarProduction} from "~/farmroutes/titanium_r";

export const SilencerThread = new CraftItem(
    'silencer_thread',
    'Gewinde (Schalldämpfer)',
    10,
    [
        new CraftMaterial(3, ironBarProduction),
        new CraftMaterial(4, copperBarProduction),
        new CraftMaterial(3, aluminumBarProduction),
        new CraftMaterial(2, titaniumBarProduction),
    ]
)