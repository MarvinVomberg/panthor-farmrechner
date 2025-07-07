import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";

export const Tracer_556mm_30_Round = new CraftItem(
    'tracer_556mm_30_round',
    '30-Schuss-5.56mm-Magazin (Nachlade-Leuchtspur Gelb)',
    10,
    [
        new CraftMaterial(3, MediumBullet),
    ]
)