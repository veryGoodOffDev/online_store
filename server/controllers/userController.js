const ApiError = require('../error/ApiError')
const {User, Bascet} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id, email, role) => {
   return jwt.sign(
        {id, email, role},
         process.env.SECURE_KEY,
         {expiresIn: '24h'}
         )
}
class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Неверный email или пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким email существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user  = await User.create({email, role, password:hashPassword})
        const bascet = await Bascet.create({userId:user.id})
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})

        if(!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if(!comparePassword) {
            return next(ApiError.badRequest('Введен неверный пароль'))
        }

        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next) {
        res.json({message: 'Все работает'})
    }
}

module.exports = new UserController()