import {CraftItem, CraftMaterial} from "~/types/crafting"
import {Gunpowder} from "~/crafting/weapon/bullets/Gunpowder";
import {CartridgeCase} from "~/crafting/weapon/bullets/CartridgeCase";
import {Projectile} from "~/crafting/weapon/bullets/Projectile";
import {farmroutes} from "~/farmroutes";

export const BigBullet = new CraftItem(
    'big_bullet',
    'Große Kugel',
    10,
    [
        new CraftMaterial(1, Gunpowder),
        new CraftMaterial(1, CartridgeCase),
        new CraftMaterial(1, Projectile),
        new CraftMaterial(1, farmroutes.steel_r)
    ]
)