import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";

export const Default_65mm_20_Round = new CraftItem(
    'default_65mm_20_round',
    '6.5 mm 20Rnd Mag',
    10,
    [
        new CraftMaterial(2, MediumBullet),
    ]
)