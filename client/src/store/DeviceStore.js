import {makeAutoObservable} from 'mobx'
export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []

        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        this._findBrand = []
        makeAutoObservable(this)
    }
    setTypes (types) {
        this._types = types
    }

    setFindBrand(id) {
       this._findBrand.push(this._brands.find(brand => brand.id === id))
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(selectedType) {
        console.log(selectedType, 'selectedType')
        this.setPage(1)
        this._selectedType = selectedType
    }

    setSelectedBrand(selectedBrand) {
        this._selectedBrand = selectedBrand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }
    setLimit(limit) {
        this._limit = limit
    }


    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get findBrand() {
        return this._findBrand
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
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}