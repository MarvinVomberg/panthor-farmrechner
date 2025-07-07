import {CraftItem, CraftMaterial} from "~/types/crafting"
import {BigBullet} from "~/crafting/weapon/bullets/BigBullet";

export const WM_300_5_Round = new CraftItem(
    'wm_300_5_round',
    '.300 WM Tracer 5Rnd AWM Magazine',
    10,
    [
        new CraftMaterial(4, BigBullet),
    ]
)