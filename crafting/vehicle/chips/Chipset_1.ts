import {CraftItem, CraftMaterial} from "~/types/crafting";
import {CircuitBoard} from "~/crafting/vehicle/parts/CircuitBoard";
import {DataCable} from "~/crafting/vehicle/parts/DataCable";
import {Chipset} from "~/crafting/vehicle/parts/Chipset";
import {Adapter} from "~/crafting/vehicle/parts/Adapter";
import {Leiterplatte} from "~/crafting/vehicle/parts/Leiterplatte";

export const Chipset_1 = new CraftItem(
    'chipset_1',
    'Chipsatz 1',
    8,
    [
        new CraftMaterial(3, CircuitBoard),
        new CraftMaterial(4, DataCable),
        new CraftMaterial(2, Chipset),
        new CraftMaterial(3, Adapter),
        new CraftMaterial(3, Leiterplatte),
    ]
)