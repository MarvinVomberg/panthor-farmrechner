import {GenericProduction} from "~/farmroutes/production";

class CraftMaterial {
    constructor(
        public amount: number,
        public requiredItem?: GenericProduction | CraftItem,
        public requiredLevel?: number,
        public name?: string,
        public localized?: string,
    ) {
    }
}

class CraftCategory {
    constructor(
        public name: string,
        public localized: string,
        public description: string,
        public icon: Component,
        public iconForeground: string,
        public iconBackground: string,
        public items?: CraftItem[],
        public parentCategory?: CraftCategory | null,
        public requiredLevel?: number,
    ) {
    }
}


class CraftItem {
    constructor(
        public name: string,
        public localized: string,
        public requiredLevel: number,
        public materials: CraftMaterial[],
    ) {
    }
}

export {
    CraftMaterial,
    CraftCategory,
    CraftItem,
};