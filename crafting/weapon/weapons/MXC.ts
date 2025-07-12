import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const MXC = new CraftItem(
    'MXC',
    'MXC',
    15,
    [
        new CraftMaterial(7, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(5, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_MXC', 'BP MXC', 15, []))
    ]
)