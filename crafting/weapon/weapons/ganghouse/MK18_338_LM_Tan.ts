import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const MK18_338_LM_Tan = new CraftItem(
    'MK18_338_LM_Tan',
    'MK18 .338 LM - Tan',
    10,
    [
        new CraftMaterial(10, Barrel),
        new CraftMaterial(8, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(7, ReceiverHousing),
        new CraftMaterial(9, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_MK18_338_LM_Tan', 'BP Mk18 .388 LM', 1, []))
    ]
)