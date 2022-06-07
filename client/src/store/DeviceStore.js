import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    _types;
    _brands;
    _devices;
    constructor() {
        this._types = [
            { id: 1, name: "Fridges" },
            { id: 2, name: "Smartphones" },
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
        ];
        this._devices = [
            {
                id: 1,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
            {
                id: 2,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
            {
                id: 3,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
            {
                id: 4,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}
