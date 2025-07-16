import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const M14_Klassisch = new CraftItem(
    'M14_Klassisch',
    'M14 [Klassisch]',
    10,
    [
        new CraftMaterial(8, Barrel),
        new CraftMaterial(8, PistolGrip),
        new CraftMaterial(4, WeaponStock),
        new CraftMaterial(6, ReceiverHousing),
        new CraftMaterial(8, HandGuard),
        new CraftMaterial(8, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_M14_Klassisch', 'BP M14 [klassisch]', 1, []))
    ]
)