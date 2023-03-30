
require("dotenv").config()
const PORT = process.env.PORT
const express = require('express')
const connect = require("./connect/db")
const app = express()
app.use(express.json())
const middleware = require("./middleware/middleware")
const UserModel = require("./model/user.model")


app.get("/", middleware, async (req, res) => {
    res.send("Api Is Start")
})


app.post("/post", async (req, res) => {
    try {
        console.log(req.body);
        const NewUser = new UserModel(req.body)
        await NewUser.save()
        res.status(201).send("post Request success")
    } catch (e) {
        res.status(400).send(e.message)

    }
})

app.patch("/post/:id", async (req, res) => {
    try {

        const ID = req.params.id
       const undateUser = await UserModel.findByIdAndUpdate({ _id: ID }, { name: req.body.name , email: req.body.email })
        res.send(undateUser,"delete done")
    } catch (e) {
        console.log(e.message);

    }

})


app.put("/post/:id", async (req, res) => {
    try {

        const ID = req.params.id
        console.log(ID);
        console.log(req.body.name);
       const undateUser = await UserModel.findByIdAndUpdate({ _id: ID }, { name: req.body.name , email: req.body.email })
        res.send(undateUser)
    } catch (e) {
        console.log(e.message);

    }

})
app.delete("/post/:id", async (req, res) => {
    try {

        const ID = req.params.id
        console.log(ID);
        console.log(req.body.name);
       const undateUser = await UserModel.findByIdAndDelete({ _id: ID } )
        res.send(undateUser)
    } catch (e) {
        console.log(e.message);

    }

})




app.listen(PORT, async () => {
    await connect()
    console.log("server start on PORT  8080")
})