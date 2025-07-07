import {CraftItem, CraftMaterial} from "~/types/crafting"
import {BigBullet} from "~/crafting/weapon/bullets/BigBullet";

export const Default_58mm_30_Round = new CraftItem(
    'default_58mm_30_round',
    '5.8mm 30Rnd Mag',
    10,
    [
        new CraftMaterial(2, BigBullet),
    ]
)