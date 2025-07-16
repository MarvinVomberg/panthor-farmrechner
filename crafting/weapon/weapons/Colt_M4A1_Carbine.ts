import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const Colt_M4A1_Carbine_Carryhandle = new CraftItem(
    'Colt_M4A1_Carbine_Carryhandle',
    'Colt M4A1 Carbine [Carryhandle]',
    20,
    [
        new CraftMaterial(6, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(4, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_Colt_M4A1_Carbine_Carryhandle', 'BP Colt M4A1 Carbine [Carryhandle]', 20, []))
    ]
)