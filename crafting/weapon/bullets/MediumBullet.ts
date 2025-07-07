import {CraftItem, CraftMaterial} from "~/types/crafting"
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {Gunpowder} from "~/crafting/weapon/bullets/Gunpowder";
import {CartridgeCase} from "~/crafting/weapon/bullets/CartridgeCase";
import {Projectile} from "~/crafting/weapon/bullets/Projectile";

export const MediumBullet = new CraftItem(
    'medium_bullet',
    'Medium Kugel',
    10,
    [
        new CraftMaterial(1, Gunpowder),
        new CraftMaterial(1, CartridgeCase),
        new CraftMaterial(1, Projectile),
        new CraftMaterial(1, ironBarProduction)
    ]
)