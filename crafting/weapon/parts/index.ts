import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {SilencerCase} from "~/crafting/weapon/parts/SilencerCase";
import {SilencerThread} from "~/crafting/weapon/parts/SilencerThread";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {CraftCategory} from "~/types/crafting";
import {weaponsCategory} from "~/crafting/weapon";
import {WrenchScrewdriverIcon} from "@heroicons/vue/16/solid";

export const weaponPartsCategory = new CraftCategory(
    'weapon_parts',
    'Waffen Teile',
    'Teile für Waffen, die in der Waffenherstellung verwendet werden können',
    WrenchScrewdriverIcon,
    'text-sky-500',
    'bg-sky-100',
    [
        Barrel,
        ChargingHandle,
        HandGuard,
        PistolGrip,
        ReceiverHousing,
        SilencerCase,
        SilencerThread,
        WeaponStock
    ],
    weaponsCategory
)