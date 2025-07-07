import {Adapter} from "~/crafting/vehicle/parts/Adapter";
import {Chipset} from "~/crafting/vehicle/parts/Chipset";
import {CircuitBoard} from "~/crafting/vehicle/parts/CircuitBoard";
import {DataCable} from "~/crafting/vehicle/parts/DataCable";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {Leiterplatte} from "~/crafting/vehicle/parts/Leiterplatte";
import {CraftCategory} from "~/types/crafting";
import {vehiclesCategory} from "~/crafting/vehicle";
import {Cog8ToothIcon} from "@heroicons/vue/16/solid";

export const vehiclePartsCategory = new CraftCategory(
    'vehicle_parts',
    'Fahrzeug Teile',
    'Teile, die für den Bau von Fahrzeugen benötigt werden.',
    Cog8ToothIcon,
    'text-green-500',
    'bg-green-200',
    [
        Adapter,
        Chipset,
        CircuitBoard,
        DataCable,
        EnginePart,
        Leiterplatte
    ],
    vehiclesCategory
)