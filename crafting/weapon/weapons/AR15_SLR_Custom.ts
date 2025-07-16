import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

const bluePrintItem = new CraftItem('BP_AR15_SLR_Custom', 'AR15 SLR Custom LEGENDÄR', 27, []);

export const AR15_SLR_Custom = new CraftItem(
    'AR15_SLR_Custom',
    'AR15 SLR Custom',
    27,
    [
        new CraftMaterial(7, Barrel),
        new CraftMaterial(6, PistolGrip),
        new CraftMaterial(5, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, bluePrintItem)
    ]
)