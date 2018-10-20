const express = require("express")

const app = express()
app.use(express.json())

const userCtrl = require("./Controllers/usersCtrl")

const port = 3000

app.get("/api/users", userCtrl.getUsers)
app.get("/api/users/:userId", userCtrl.getOneUser)
app.get("/api/admins", userCtrl.getAdmins)
app.get("/api/nonadmins", userCtrl.getNonAdmins)
app.get("/api/user_type/:userType", userCtrl.getUsersByType)
app.put("/api/users/:userId", userCtrl.updateUser)
app.post("/api/users", userCtrl.createUser)
app.delete("/api/users/:userId", userCtrl.deleteUser)

app.listen(port, () => console.log(`listening on port: ${port}`))