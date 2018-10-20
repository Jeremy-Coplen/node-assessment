const userData = require("../../userData.json")

let id = 101

module.exports = {
    getUsers: (req, res) => {
        const {age, lastname, email, favorites} = req.query

        if(age) {
            res.status(200).send(userData.filter(user => user.age < age))
        }
        if(lastname) {
            res.status(200).send(userData.filter(user => user.last_name === lastname))
        }
        if(email) {
            res.status(200).send(userData.filter(user => user.email === email))
        }
        if(favorites) {
            res.status(200).send(userData.filter(user => user.favorites.includes(favorites)))
        }
        res.status(200).send(userData)
    },
    getOneUser: (req, res) => {
        const {userId} = req.params

        const user = userData.find(user => user.id === Number(userId))
        if(!user) {
            res.status(404).json(null)
        }
        res.status(200).send(user)
    },
    getAdmins: (req, res) => {
        res.status(200).send(userData.filter(user => user.type === "admin"))
    },
    getNonAdmins: (req, res) => {
        res.status(200).send(userData.filter(user => user.type !== "admin"))
    },
    getUsersByType: (req, res) => {
        const {userType} = req.params

        res.status(200).send(userData.filter(user => user.type === userType))
    },
    updateUser: (req, res) => {
        const {userId} = req.params

        const index = userData.findIndex(user => user.id === Number(userId))
        userData[index] = req.body
        res.status(200).send(userData)
    },
    createUser: (req, res) => {
        const newUser = Object.assign({}, req.body, {id})
        userData.push(newUser)
        id++
        res.status(200).send(userData)
    },
    deleteUser: (req, res) => {
        const {userId} = req.params

        const index = userData.findIndex(user => user.id === Number(userId))
        userData.splice(index, 1)
        res.status(200).send(userData)
    }
}