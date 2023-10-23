import express from 'express'
import Post from "./Post.js";
import mongoose from 'mongoose'
const PORT = 4444
const app = express()

const DB_URL = 'mongodb+srv://qwerty:qwerty123@cluster0.wijxp.mongodb.net/bcHand?retryWrites=true&w=majority'

app.use(express.json())

app.post('/', async (req, res) => {
    const {autor, title, content, picture} = req.body
    const post = await Post.create({autor, title, content, picture})

    res.status(200).json('workfdsf')
})

async function  startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('server start'))
    }catch (e) {
        console.log(e)
    }
}
startApp()