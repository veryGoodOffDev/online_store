import {makeAutoObservable} from 'mobx'
export default class DeviceStore {
    constructor() {
        this._isLoading = true
        this._types = []
        this._brands = []
        this._devices = []
        this._namesBrands = []

        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 10
        this._findBrandById = null
        makeAutoObservable(this)
    }
    setTypes (types) {
        this._types = types
    }
    setIsLoading(isLoading) {
        this._isLoading = isLoading
    }
    setNamesBrands(namesBrands) {
        this._namesBrands = namesBrands
    }

    setFindBrand(id) {
       this._findBrandById = this._brands?.find(b => b.id === id)
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
        this.setIsLoading(false)
    }
    setSelectedType(selectedType) {
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

    get isLoading() {
        return this._isLoading
    }

    get brands() {
        return this._brands
    }

    get findBrandById() {
        return this._findBrandById
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

    get namesBrands() {
        return this._namesBrands
    }
}