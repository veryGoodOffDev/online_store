import {makeAutoObservable} from 'mobx'
export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:'Холодильники'},
            {id:2, name:'Смартфоны'},
            {id:3, name:'Ноутбуки'},
            {id:4, name:'Телевизоры'},
        ]
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'},
            {id:3, name:'Lenovo'},
            {id:4, name:'Asus'},
        ]
        this._devices = [
            {id:1, name:'Iphone 12', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'},
            {id:2, name:'Iphone 13', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'},
            {id:3, name:'Iphone 14', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'},
            {id:4, name:'Iphone 11', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'},
            {id:5, name:'Iphone 15', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'},
            {id:6, name:'Iphone 16', price:100200, rating: 5, img: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80'},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes (types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(selectedType) {
        this._selectedType = selectedType
    }

    setSelectedBrand(selectedBrand) {
        this._selectedBrand = selectedBrand
    }


    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}