import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";

export const EPR_556mm_30_Round = new CraftItem(
    'epr_556mm_30_round',
    '5.56mm EPR 30Rnd STANAG',
    10,
    [
        new CraftMaterial(2, MediumBullet),
    ]
)