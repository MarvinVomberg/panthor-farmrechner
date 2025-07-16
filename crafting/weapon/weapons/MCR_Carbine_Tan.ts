import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

const bluePrintItem = new CraftItem('BP_MCR_Carbine_Tan', 'BP MCR Carbine - Tan LEGENDÄR', 27, []);

export const MCR_Carbine_Tan = new CraftItem(
    'MCR_Carbine_Tan',
    'MCR Carbine - Tan',
    27,
    [
        new CraftMaterial(6, Barrel),
        new CraftMaterial(7, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(7, ReceiverHousing),
        new CraftMaterial(7, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, bluePrintItem)
    ]
)