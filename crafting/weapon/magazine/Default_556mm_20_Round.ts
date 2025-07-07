import {CraftItem, CraftMaterial} from "~/types/crafting"
import {SmallBullet} from "~/crafting/weapon/bullets/SmallBullet";

export const Default_556mm_20_Round = new CraftItem(
    'default_556mm_20_round',
    '20-Schuss-5.56mm-Verbundzweckmagazin',
    10,
    [
        new CraftMaterial(2, SmallBullet),
    ]
)