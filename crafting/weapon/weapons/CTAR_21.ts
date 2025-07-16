import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const CTAR_21 = new CraftItem(
    'CTAR_21',
    'CTAR-21',
    10,
    [
        new CraftMaterial(4, Barrel),
        new CraftMaterial(4, PistolGrip),
        new CraftMaterial(5, WeaponStock),
        new CraftMaterial(5, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(4, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_CTAR_21', 'BP CTAR-21', 10, []))
    ]
)