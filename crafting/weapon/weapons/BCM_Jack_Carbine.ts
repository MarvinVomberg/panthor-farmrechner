import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

const bluePrintItem = new CraftItem('BP_BCM_Jack_Carbine', 'BP BCM "Jack" Carbine LEGENDÄR', 30, []);

export const BCM_Jack_Carbine = new CraftItem(
    'BCM_Jack_Carbine',
    'BCM Jack Carbine',
    30,
    [
        new CraftMaterial(7, Barrel),
        new CraftMaterial(6, PistolGrip),
        new CraftMaterial(7, WeaponStock),
        new CraftMaterial(7, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, bluePrintItem)
    ]
)