import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const HK_HK416_D14_5 = new CraftItem(
    'HK_HK416_D14_5',
    'HK HK416 D14.5',
    20,
    [
        new CraftMaterial(6, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(5, WeaponStock),
        new CraftMaterial(4, ReceiverHousing),
        new CraftMaterial(5, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_HK_HK416_D14_5', 'BP HK HK416 D14.5', 20, []))
    ]
)