import {applePieProduction} from "~/farmroutes/applepie";
import {beerProduction} from "~/farmroutes/beer";
import {cableProduction} from "~/farmroutes/cable";
import {clayplateProduction} from "~/farmroutes/clayplate";
import {biscuitProduction} from "~/farmroutes/biscuit";
import {doorProduction} from "~/farmroutes/door";
import {fentanylSyringeProduction} from "~/farmroutes/fentanyl_r";
import {fishSticksProduction} from "~/farmroutes/fish_sticks";
import {grapeCakeProduction} from "~/farmroutes/grapecake";
import {insulationProduction} from "~/farmroutes/insulation";
import {lsdProduction} from "~/farmroutes/lsd";
import {moonshinerProduction} from "~/farmroutes/moonshiner";
import {steelBarProduction} from "~/farmroutes/steel_bar";
import {windowProduction} from "~/farmroutes/window";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {chemicalsProduction} from "~/farmroutes/chemicals";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {copperBarProduction} from "~/farmroutes/copper_bar";
import {oilProduction} from "~/farmroutes/oil_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {boardsProduction} from "~/farmroutes/wood_r";
import {appleJuiceProduction} from "~/farmroutes/apple_juice";
import {breadProduction} from "~/farmroutes/bread";
import {charcoalProduction} from "~/farmroutes/charcoal";
import {brickProduction} from "~/farmroutes/clay_r";
import {cottonProduction} from "~/farmroutes/cotton";
import {appleProduction} from "~/farmroutes/apple";
import {rollProduction} from "~/farmroutes/bread_roll";
import {concreteProduction} from "~/farmroutes/concrete";
import {grainboozeProduction} from "~/farmroutes/grainbooze";
import {leatherProduction} from "~/farmroutes/leather";
import {preciousMetalsProduction} from "~/farmroutes/precious_metal_r";
import {fishFiletProduction} from "~/farmroutes/fishfilet";
import type {GenericProduction} from "~/farmroutes/production";
import {jewelryProduction} from "~/farmroutes/jewelry";

interface Farmroutes {
    [key: string]: GenericProduction;
}

export const farmroutes: Farmroutes = {
    aluminum_r: aluminumBarProduction,
    apple: appleProduction,
    apple_juice: appleJuiceProduction,
    applepie: applePieProduction,
    beer: beerProduction,
    biscuit: biscuitProduction,
    wood_r: boardsProduction,
    bread: breadProduction,
    roll: rollProduction,
    cable: cableProduction,
    concrete: concreteProduction,
    charcoal_r: charcoalProduction,
    chemicals: chemicalsProduction,
    clayplate: clayplateProduction,
    clay_r: brickProduction,
    copper_r: copperBarProduction,
    cotton_r: cottonProduction,
    door: doorProduction,
    fentanyl_r: fentanylSyringeProduction,
    fishsticks: fishSticksProduction,
    fishfilet: fishFiletProduction,
    grapecake: grapeCakeProduction,
    grainbooze: grainboozeProduction,
    insulation: insulationProduction,
    iron_bar: ironBarProduction,
    jewelry: jewelryProduction,
    leather: leatherProduction,
    lsd: lsdProduction,
    moonshiner: moonshinerProduction,
    oil_r: oilProduction,
    plastic: plasticProduction,
    precious_metal_r: preciousMetalsProduction,
    steel_bar: steelBarProduction,
    window: windowProduction,
}