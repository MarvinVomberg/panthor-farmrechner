import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const MSBS_Grot_MR = new CraftItem(
    'MSBS_Grot_MR',
    'MSBS Grot MR',
    15,
    [
        new CraftMaterial(4, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(4, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(5, HandGuard),
        new CraftMaterial(5, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_MSBS_Grot_MR', 'BP MSBS Grot MR', 15, []))
    ]
)