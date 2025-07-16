import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const RRA_LAR_15_AMR = new CraftItem(
    'RRA_LAR_15_AMR',
    'RRA LAR-15 AMR',
    10,
    [
        new CraftMaterial(7, Barrel),
        new CraftMaterial(7, PistolGrip),
        new CraftMaterial(8, WeaponStock),
        new CraftMaterial(7, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_RRA_LAR_15_AMR', 'BP RRA LAR-15 AMR', 1, []))
    ]
)