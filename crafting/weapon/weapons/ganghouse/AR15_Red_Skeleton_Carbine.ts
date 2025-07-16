import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const AR15_Red_Skeleton_Carbine = new CraftItem(
    'AR15_Red_Skeleton_Carbine',
    'AR15 Red Skeleton Carbine',
    10,
    [
        new CraftMaterial(8, Barrel),
        new CraftMaterial(6, PistolGrip),
        new CraftMaterial(5, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_AR15_Red_Skeleton_Carbine', 'BP AR15 Red Skeleton Carbine', 1, []))
    ]
)