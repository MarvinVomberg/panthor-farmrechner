interface ServerItemCfg {
    [key: string]: ServerItem
}

interface ServerItem {
    displayName: string;
    weight: number;
    sellPrice: number;
    market: number;
    icon: string;
    illegal: boolean;
    drug: boolean;
    edible: number;
    exp: number;
    buyPrice: number;
    tool: string;
    eventItem: boolean;
    shredderAble: number;
}

export const server_items_cfg: ServerItemCfg = {
    "aluminum_r": {
        "displayName": "STR_Item_AluminumIngot",
        "weight": 3,
        "sellPrice": 290,
        "market": 0,
        "icon": "r\\RL\\addons\\textures\\icons\\v_items\\stage_3\\aluminum_r.paa",
        "illegal": false,
        "drug": false,
        "edible": -1,
        "exp": 0,
        "buyPrice": -1,
        "tool": "",
        "eventItem": false,
        "shredderAble": 0
    },
    "beer": {
        "displayName": "STR_Item_beer",
        "weight": 3,
        "sellPrice": 690,
        "market": 5,
        "icon": "r\\RL\\addons\\textures\\icons\\v_items\\stage_5\\beer.paa",
        "illegal": false,
        "drug": false,
        "edible": -1,
        "exp": 0,
        "buyPrice": -1,
        "tool": "",
        "eventItem": false,
        "shredderAble": 0
    },
    "apple": {
        "displayName": "STR_Item_Apple",
        "weight": 2,
        "sellPrice": 90,
        "market": -1,
        "icon": "r\\RL\\addons\\textures\\icons\\v_items\\stage_1\\apple.paa",
        "edible": 10,
        "illegal": false,
        "drug": false,
        "exp": 0,
        "buyPrice": -1,
        "tool": "",
        "eventItem": false,
        "shredderAble": 0
    },
    "bread": {
        "displayName": "STR_Item_bread",
        "weight": 2,
        "sellPrice": 385,
        "market": 3,
        "icon": "r\\RL\\addons\\textures\\icons\\v_items\\stage_1\\bread.paa",
        "edible": 10,
        "illegal": false,
        "drug": false,
        "exp": 0,
        "buyPrice": -1,
        "tool": "",
        "eventItem": false,
        "shredderAble": 0
    }
};