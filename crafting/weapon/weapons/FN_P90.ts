import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const FN_P90_5_7mm = new CraftItem(
    'FN_P90_5_7mm',
    'FN P90 5.7mm',
    18,
    [
        new CraftMaterial(4, Barrel),
        new CraftMaterial(4, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(5, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(4, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_FN_P90_5_7mm', 'BP FN P90 5.7mm', 18, []))
    ]
)