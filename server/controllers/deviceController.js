const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {

    async create(req, res, next) {
        console.log(req.body, 'body в создании')
        try{
            let {name, price, brandId, typeId, info} = req.body
            
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, info, img: fileName})

            if(info) {
                info = JSON.parse(info)
                info.forEach(i => 
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            deviceId: device.id
                        })
                    )
            }
            
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    //изменение данных о товаре, пока только назавание и цена
    async update(req, res, next) {
        let {id} = req.params
        const {name, price} = req.body
        try{
            const device = await Device.findByPk(id)
            if(device) {
                device.name = name;
                device.price = price;
                await device.save()
                res.send('Данные успешно изменены');
            } else {
                res.status(404)
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 8
        let offset = page * limit - limit
        let devices;
        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset})
        }
        return res.json(devices)
    }
    async getOne(req, res) {
        const {id} = req.params
      const device = await Device.findOne(
            {
            where:{id},
            include:[{model: DeviceInfo, as: 'info'}]
        },
        )
        return res.json(device)
    }

    async removeOne (req, res) {
        const {id} = req.query
        try {
          const response =  await Device.destroy({where:{id}}).then((data) => {
            if(data) {
                console.log('объект успешно удален')
            } else {
                return
            }
          })
          console.log(response)
          return res.json(response)
            
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new DeviceController()