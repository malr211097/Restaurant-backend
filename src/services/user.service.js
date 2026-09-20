const { User } = require('../models')
const { Op } = require('sequelize')
const bcrypt = require('bcryptjs')

class UserService {

    static async getAllUsers() {
        return await User.findAll({
            attributes: { exclude: ['password']},
            order: [['name', 'ASC']]
        })
    }

    static async getUserById(id) {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] }
        })

        if (!user) {
            throw new Error('User not found')
       }

       return user
    }

    static async createUser(userData) {
        const { IdNumber, name, lastName, email } = userData
        const existingUser = await User.findOne({where: {email}})

        if (existingUser) {
            throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = await User.create({
        IdNumber,
        name,
        lastName,
        email,
        password: hashedPassword
    })

    const createdUser = await User.toJSON()
    delete createdUser.password

    return createdUser
    }

    static async updateUser(id, userData) {
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error('User not found')
        }

        const { IdNumber, name, lastName, email, password } = userData

        if(idNumber) {
            const existingUser = await User.findOne({ where: {idNumber}})
            if (existingUser){
                throw new Error('Identification number already exists')
        }
     }

     if (email) {
        const existingEmail = await User.findOne({ where: { email, userId: {[Op.ne]: id }}})
        if (existingEmail) {
            throw new Error('Email already exists')
    }
  }

     const updatedData = { idNumber, name, lastName, email }

     if (password) {
        const hashedPassword = await bcrypt.hash(password, 10)
        updatedData.password = hashedPassword
     }

        await user.update(updatedData)

        const updatedUser = user.toJSON()
        delete updatedData.password

        return updatedUser
         }

        static async deleteUser(id) {
            const user = await User.findByPk(id)

            if (!user) {
                throw new Error('User not found')
            }

            await user.destroy()

            return { message: 'User deleted successfully' }
        }

        static async login(email, password) {
            const user = await User.findOne({ where: { email } })

            if (!user) {
                throw new Error('Invalid email or password')
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Invalid email or password')
            }

            const loginUser = user.toJSON()
            delete user.password

            return user
        }
    }

module.exports = UserService
 