import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const M16A1 = new CraftItem(
    'M16A1',
    'M16A1',
    10,
    [
        new CraftMaterial(5, Barrel),
        new CraftMaterial(4, PistolGrip),
        new CraftMaterial(5, WeaponStock),
        new CraftMaterial(5, ReceiverHousing),
        new CraftMaterial(5, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_M16A1', 'BP M16A1', 10, []))
    ]
)