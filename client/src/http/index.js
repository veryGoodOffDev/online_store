import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL 
})

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}


$authHost.interceptors.request.use(authInterceptor)



// $authHost.interceptors.request.use(undefined, (error) => {
//   if (error.response && error.response.status === 401) {
//     console.log('ошибка')
//   } else {
//     authInterceptor
//   }
//   return Promise.reject(error.request.data);
// });

// $authHost.interceptors.request.use(function (config) {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     console.log(config, 'config')
//     // Здесь можете сделать что-нибудь с перед отправкой запроса
//     return config;
// }, function (error) {
//     // Сделайте что-нибудь с ошибкой запроса
//     console.log('тут ошибка запроса', error)
//     return Promise.reject(error);
//   })

export {
    $host,
    $authHost,
}