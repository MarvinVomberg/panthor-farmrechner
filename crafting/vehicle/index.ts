import {CraftCategory} from "~/types/crafting";
import {TruckIcon} from "@heroicons/vue/20/solid";

export const vehiclesCategory = new CraftCategory(
    'vehicles',
    'Fahrzeugbau',
    'Fahrzeuge, die für den Transport von Personen und Gütern verwendet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [],
    null,
    10,
)