import { $authHost, $host } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}
export const getTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}
export const deleteBrand = async (id) => {
    await $authHost.delete('api/brand', {params:{
         id
     }})
 }
export const getBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

//Изменение данных о товаре
export const editDevice = async(id, {name, price}) => {
    const {data} = await $host.put(`api/device/${id}`, {name, price}, {params:{
        id,    
    }
})
    return data
}
export const getDevices = async (typeId, brandId, page, limit) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }})
    return data
}
export const getOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

//удаление по id
export const deleteDevice = async (id) => {
   await $authHost.delete('api/device', {params:{
        id
    }})
}


