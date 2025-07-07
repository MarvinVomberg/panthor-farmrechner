import {CraftItem, CraftMaterial} from "~/types/crafting"
import {Gunpowder} from "~/crafting/weapon/bullets/Gunpowder";
import {CartridgeCase} from "~/crafting/weapon/bullets/CartridgeCase";
import {Projectile} from "~/crafting/weapon/bullets/Projectile";

export const SmallBullet = new CraftItem(
    'small_bullet',
    'Small Kugel',
    10,
    [
        new CraftMaterial(1, Gunpowder),
        new CraftMaterial(1, CartridgeCase),
        new CraftMaterial(1, Projectile),
    ]
)