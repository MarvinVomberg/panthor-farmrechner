import type {MarketItem, MarketItemResponse} from "~/types/api";
import {server_items_cfg} from "~/farmroutes/server_items_cfg";

class RawMaterial {
    constructor(
        public name: string,
        public localized_name: string,
        public source: string,
        public weight: number
    ) {
    }
}

class ProcessingStep {
    constructor(
        public facility: string,
        public inputMaterials: RawMaterial[],
        public output: RawMaterial,
        public weight: number,
        public outputWeight: number,
        public intermediateProduct?: Product
    ) {
    }
}

class Product {
    constructor(
        public name: string,
        public localized_name: string,
        public processing: ProcessingStep[],
        public finalWeight: number,
        public trader?: string
    ) {
        if (processing.length > 12) {
            throw new Error("Maximal 3 Verarbeitungsschritte erlaubt.");
        }
    }

    getIntermediateProducts(): Product[] {
        return this.processing
            .filter(step => step.intermediateProduct)
            .map(step => step.intermediateProduct!);
    }
}

class GenericProduction {
    private rawMaterials: RawMaterial[];
    private product: Product;
    private price?: number;

    constructor(
        public productName: string,
        public productLocalizedName: string,
        rawMaterials: RawMaterial[],
        processingSteps: ProcessingStep[],
        public finalWeight: number,
        public trader?: string,
        price?: number,
    ) {
        this.rawMaterials = rawMaterials;
        this.product = new Product(productName, productLocalizedName, processingSteps, finalWeight, trader);
        this.price = price;
    }

    async getPrice(): Promise<number> {
        if (this.price) {
            return this.price;
        }

        const server_item = server_items_cfg[this.productName];

        if(server_item.market === -1) {
            return server_item.sellPrice;
        }

        return await fetch('https://api.panthor.de/v1/market/1').then(_ => _.json()).then((marketResponse: MarketItemResponse) => {

            const marketItem = marketResponse.data[marketResponse.data.findIndex((marketItem: MarketItem) => marketItem.item === this.productName)];

            return marketItem?.export_virt_item?.sellPrice ?? marketItem.price;

        })
    }

    getRawMaterials(): RawMaterial[] {
        return this.rawMaterials;
    }

    getProductionSteps(): ProcessingStep[] {
        return this.product.processing;
    }

    getFinalProduct(): Product {
        return this.product;
    }

    calculateEndProductYield(trunkWeight: number): number {
        if (this.getProductionSteps().length === 1) {
            return Math.floor(trunkWeight / this.getRawMaterials()[0].weight);
        }

        const rawMaterialWeights = this.rawMaterials.map(m => m.weight);
        const minWeightFactor = Math.min(...rawMaterialWeights.map(w => trunkWeight / w));

        let outputYield = minWeightFactor;
        let currentWeight = trunkWeight * minWeightFactor;

        for (const step of this.product.processing) {
            const inputWeight = step.inputMaterials.reduce((sum, mat) => sum + (mat.weight * outputYield), 0);
            currentWeight = Math.min(inputWeight, step.outputWeight * outputYield);
        }

        outputYield = currentWeight / this.product.finalWeight;
        return Math.floor(outputYield);
    }
}

export {RawMaterial, ProcessingStep, Product, GenericProduction};