import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    _types;
    _selectedType;
    _brands;
    _selectedBrand;
    _devices;
    constructor() {
        this._types = [
            { id: 1, name: "Fridges" },
            { id: 2, name: "Smartphones" },
            { id: 3, name: "Laptops" },
            { id: 4, name: "TVs" },
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "Lenovo" },
            { id: 4, name: "Asus" },
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
            {
                id: 5,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
            {
                id: 6,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
            {
                id: 7,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
            {
                id: 8,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://istudio.ua/upload/iblock/59c/iphone12-pro-128-gb-pacific-blue.png",
            },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get selectedType() {
        return this._selectedType;
    }

    get brands() {
        return this._brands;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get devices() {
        return this._devices;
    }
}
