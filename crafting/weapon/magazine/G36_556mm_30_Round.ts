import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";

export const G36_556mm_30_Round = new CraftItem(
    'g36_556mm_30_round',
    '5.56mm EPR 30Rnd G36 Magazine',
    10,
    [
        new CraftMaterial(2, MediumBullet),
    ]
)