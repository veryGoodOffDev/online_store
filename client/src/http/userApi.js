import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role:'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    try{
        const {data} = await $authHost.get('api/user/auth')
        console.log(data, 'data from userApi')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token) 
    } catch (e) {
        console.log(e.message, 'Ошибка')
    }

}