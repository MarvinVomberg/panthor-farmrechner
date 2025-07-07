import {BigBullet} from "~/crafting/weapon/bullets/BigBullet";
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";
import {SmallBullet} from "~/crafting/weapon/bullets/SmallBullet";
import {CartridgeCase} from "~/crafting/weapon/bullets/CartridgeCase";
import {Gunpowder} from "~/crafting/weapon/bullets/Gunpowder";
import {Projectile} from "~/crafting/weapon/bullets/Projectile";
import {CraftCategory} from "~/types/crafting";
import {weaponMagazinesCategory} from "~/crafting/weapon/magazine";
import {PlusIcon} from "@heroicons/vue/16/solid";

export const weaponBulletsCategory = new CraftCategory(
    'weapon_bullets',
    'Waffen Kugeln',
    'Kugeln und deren Komponenten für Magazinherstellung',
    PlusIcon,
    'text-blue-500',
    'bg-blue-100',
    [
        BigBullet,
        MediumBullet,
        SmallBullet,
        CartridgeCase,
        Gunpowder,
        Projectile,
    ],
    weaponMagazinesCategory,
    10
)