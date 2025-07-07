import {CraftItem, CraftMaterial} from "~/types/crafting"
import {BigBullet} from "~/crafting/weapon/bullets/BigBullet";

export const M14_762mm_20_Round = new CraftItem(
    'm14_762mm_20_round',
    '7.62mm EPR 20Rnd M14 Magazine',
    10,
    [
        new CraftMaterial(2, BigBullet),
    ]
)