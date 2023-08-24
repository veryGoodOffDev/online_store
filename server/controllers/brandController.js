const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        res.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0")
        res.set("Pragma", "no-cache")
        res.set("Expires", 0)
        next()
        return res.json(brand)
    }
    async getAll(req, res, next) {
        const brands = await Brand.findAll()
        res.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0")
        res.set("Pragma", "no-cache")
        res.set("Expires", 0)
        next()
        return res.json(brands)
    }
}

module.exports = new BrandController()