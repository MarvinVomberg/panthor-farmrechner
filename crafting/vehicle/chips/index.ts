import {Chipset_1} from "~/crafting/vehicle/chips/Chipset_1";
import {Chipset_2} from "~/crafting/vehicle/chips/Chipset_2";
import {Chipset_3} from "~/crafting/vehicle/chips/Chipset_3";
import {CraftCategory} from "~/types/crafting";
import {vehiclesCategory} from "~/crafting/vehicle";
import {CpuChipIcon} from "@heroicons/vue/16/solid";

export const tuningChipsCategory = new CraftCategory(
    'tuning_chips',
    'Tuningchips',
    'Tuningchips für Fahrzeuge, die verschiedene Eigenschaften verbessern können.',
    CpuChipIcon,
    'text-amber-500',
    'bg-amber-200',
    [
        Chipset_1,
        Chipset_2,
        Chipset_3
    ],
    vehiclesCategory
)