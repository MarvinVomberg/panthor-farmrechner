import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";
import {farmroutes} from "~/farmroutes";

export const Sand_65mm_20_Round = new CraftItem(
    'sand_65mm_20_round',
    '6.5mm 30Rnd Sand Mag',
    10,
    [
        new CraftMaterial(2, MediumBullet),
        new CraftMaterial(1, farmroutes.iron_bar),
    ]
)