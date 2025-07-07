import {CraftItem, CraftMaterial} from "~/types/crafting"
import {SmallBullet} from "~/crafting/weapon/bullets/SmallBullet";

export const Magnum_338_10_Round = new CraftItem(
    'magnum_338_10_round',
    '10Rnd .338 Lapua Magnum',
    10,
    [
        new CraftMaterial(4, SmallBullet),
    ]
)