import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";
import {farmroutes} from "~/farmroutes";

export const Black_65mm_20_Round = new CraftItem(
    'black_65mm_20_round',
    '6.5mm 30Rnd Black Mag',
    10,
    [
        new CraftMaterial(2, MediumBullet),
        new CraftMaterial(1, farmroutes.iron_bar),
    ]
)