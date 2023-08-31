import {makeAutoObservable} from 'mobx'
export default class CartStore {
    constructor() {
        this._cart = []

        makeAutoObservable(this)
    }

    
    setCart (items) {
        this._cart = items
    }

    addOne (item) {
        this._cart.push(item)
    }

    removeOne(id) {
       this._cart = this._cart.filter(i => i.id !== id)
    }


    get cart() {
        return this._cart
    }
}