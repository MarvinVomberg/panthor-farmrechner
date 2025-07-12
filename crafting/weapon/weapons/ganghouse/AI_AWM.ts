import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const AI_AWM = new CraftItem(
    'AI_AWM',
    'AI AWM',
    10,
    [
        new CraftMaterial(8, Barrel),
        new CraftMaterial(9, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(7, ReceiverHousing),
        new CraftMaterial(8, HandGuard),
        new CraftMaterial(7, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_AI_AWM', 'BP AI-AWM', 1, []))
    ]
)