import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const MX = new CraftItem(
    'MX',
    'MX',
    20,
    [
        new CraftMaterial(6, Barrel),
        new CraftMaterial(4, PistolGrip),
        new CraftMaterial(7, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(7, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_MX', 'BP MX', 20, []))
    ]
)