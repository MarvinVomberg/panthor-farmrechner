import {Adapter} from "~/crafting/vehicle/parts/Adapter";
import {Chipset} from "~/crafting/vehicle/parts/Chipset";
import {CircuitBoard} from "~/crafting/vehicle/parts/CircuitBoard";
import {DataCable} from "~/crafting/vehicle/parts/DataCable";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {Leiterplatte} from "~/crafting/vehicle/parts/Leiterplatte";
import {CraftCategory} from "~/types/crafting";
import {vehiclesCategory} from "~/crafting/vehicle";
import {Cog8ToothIcon} from "@heroicons/vue/16/solid";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Cockpit} from "~/crafting/vehicle/parts/Cockpit";
import {Engine} from "~/crafting/vehicle/parts/Engine";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {MainRotor} from "~/crafting/vehicle/parts/MainRotor";
import {Passengerroom} from "~/crafting/vehicle/parts/Passengerroom";
import {TailBoom} from "~/crafting/vehicle/parts/TailBoom";
import {TailRotor} from "~/crafting/vehicle/parts/TailRotor";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";

export const vehiclePartsCategory = new CraftCategory(
    'vehicle_parts',
    'Fahrzeug Teile',
    'Teile, die für den Bau von Fahrzeugen benötigt werden.',
    Cog8ToothIcon,
    'text-green-500',
    'bg-green-200',
    [
        Adapter,
        Chassis,
        Chipset,
        CircuitBoard,
        Cockpit,
        DataCable,
        Engine,
        EnginePart,
        InteriorPart,
        Leiterplatte,
        MainRotor,
        Passengerroom,
        TailBoom,
        TailRotor,
        TransmissionPart,
        Tyre,
        VehicleBodyPart,
        VehicleWindow,
    ],
    vehiclesCategory
)