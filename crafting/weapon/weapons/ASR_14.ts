import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const ASR_14 = new CraftItem(
    'ASR_14',
    'ASR-14',
    10,
    [
        new CraftMaterial(10, Barrel),
        new CraftMaterial(7, PistolGrip),
        new CraftMaterial(8, WeaponStock),
        new CraftMaterial(9, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_ASR_14', 'BP ASR14 S Blackwhite', 10, []))
    ]
)