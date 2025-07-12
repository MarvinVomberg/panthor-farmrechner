import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const Desert_Tech_MDR_Rainbow_5_56 = new CraftItem(
    'Desert_Tech_MDR_Rainbow_5_56',
    'Desert Tech MDR Rainbow 5.56',
    27,
    [
        new CraftMaterial(7, Barrel),
        new CraftMaterial(6, PistolGrip),
        new CraftMaterial(4, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_Desert_Tech_MDR_Rainbow_5_56', 'MDR WTF', 27, []))
    ]
)