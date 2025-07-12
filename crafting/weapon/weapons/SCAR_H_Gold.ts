import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const SCAR_H_Gold = new CraftItem(
    'SCAR_H_Gold',
    'SCAR-H Gold',
    25,
    [
        new CraftMaterial(5, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(8, WeaponStock),
        new CraftMaterial(5, ReceiverHousing),
        new CraftMaterial(5, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_SCAR_H_Gold', 'BP SCAR H Gold', 25, []))
    ]
)