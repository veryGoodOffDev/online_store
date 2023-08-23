import {makeAutoObservable} from 'mobx'
export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role = ''
        makeAutoObservable(this)
    }
    setRole(role) {
        this._role = role
    }
    setIsAuth (bool) {
        this._isAuth = bool
    }

    setUser(bool) {
        this._isAuth = bool
    }

    get role() {
        return this._role
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}