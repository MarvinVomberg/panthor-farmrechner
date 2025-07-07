import {CraftItem, CraftMaterial} from "~/types/crafting";
import {CircuitBoard} from "~/crafting/vehicle/parts/CircuitBoard";
import {DataCable} from "~/crafting/vehicle/parts/DataCable";
import {Chipset} from "~/crafting/vehicle/parts/Chipset";
import {Adapter} from "~/crafting/vehicle/parts/Adapter";
import {Leiterplatte} from "~/crafting/vehicle/parts/Leiterplatte";

export const Chipset_3 = new CraftItem(
    'chipset_3',
    'Chipsatz 3',
    8,
    [
        new CraftMaterial(5, CircuitBoard),
        new CraftMaterial(8, DataCable),
        new CraftMaterial(5, Chipset),
        new CraftMaterial(6, Adapter),
        new CraftMaterial(6, Leiterplatte),
    ]
)