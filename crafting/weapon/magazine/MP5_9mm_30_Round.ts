import {CraftItem, CraftMaterial} from "~/types/crafting"
import {SmallBullet} from "~/crafting/weapon/bullets/SmallBullet";

export const MP5_9mm_30_Round = new CraftItem(
    'mp5_9mm_30_round',
    '9mm FMJ 30Rnd MP5 Magazine',
    10,
    [
        new CraftMaterial(3, SmallBullet),
    ]
)