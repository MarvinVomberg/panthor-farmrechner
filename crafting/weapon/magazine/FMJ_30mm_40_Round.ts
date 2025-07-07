import {CraftItem, CraftMaterial} from "~/types/crafting"
import {SmallBullet} from "~/crafting/weapon/bullets/SmallBullet";

export const FMJ_30mm_40_Round = new CraftItem(
    'fmj_30mm_40_round',
    '40Rnd 4.6x30mm FMJ',
    10,
    [
        new CraftMaterial(4, SmallBullet),
    ]
)