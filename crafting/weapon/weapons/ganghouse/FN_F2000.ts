import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const FN_F2000 = new CraftItem(
    'FN_F2000',
    'FN F2000',
    10,
    [
        new CraftMaterial(8, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(4, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_FN_F2000', 'BP FN F2000', 10, []))
    ]
)