import {CraftItem, CraftMaterial} from "~/types/crafting"
import {SmallBullet} from "~/crafting/weapon/bullets/SmallBullet";

export const HST_19mm_30_Round = new CraftItem(
    'hst_19mm_30_round',
    '30 Schuss 9x19mm HST',
    10,
    [
        new CraftMaterial(2, SmallBullet),
    ]
)