import {AlarmSystem} from "~/crafting/fuel_station/upgrades/AlarmSystem";
import {ATM} from "~/crafting/fuel_station/upgrades/ATM";
import {GamblingMachine} from "~/crafting/fuel_station/upgrades/GamblingMachine";
import {Camera} from "~/crafting/fuel_station/upgrades/Camera";
import {Lottery} from "~/crafting/fuel_station/upgrades/Lottery";
import {AirCompressor} from "~/crafting/fuel_station/upgrades/AirCompressor";
import {CombinationLock} from "./upgrades/CombinationLock";
import {AttendantProtection} from "./upgrades/AttendantProtection";
import {Payphone} from "./upgrades/Payphone";
import {FuelStorage} from "./upgrades/FuelStorage";
import {CraftCategory} from "~/types/crafting";
import {ShoppingCartIcon} from "@heroicons/vue/20/solid";

export const fuelstationCategory = new CraftCategory(
    'fuel_station',
    'Tankstelle',
    'Die Tankstellen Upgrades könne am Industriepark gecraftet werden.',
    ShoppingCartIcon,
    'text-green-500',
    'bg-green-200',
    [   
        AlarmSystem,
        ATM,
        GamblingMachine,
        Camera,
        Lottery,
        AirCompressor,
        CombinationLock,
        AttendantProtection,
        Payphone,
        FuelStorage,
    ],
    null,
    10,
)