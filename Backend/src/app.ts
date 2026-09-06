import express from 'express'
import useGraph from "./ai/graph.ai.js"
import runGraph from "./ai/graph.ai.js"

//for Typescript : npm i @types/cors
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))

app.get('/', async (req, res) => {
    const result = await runGraph("write an code for factorial function in js")
    res.json(result)
})
app.post("/invoke", async (req, res) => {

    const { input } = req.body
    const result = await runGraph(input)

    res.status(200).json({
        message: "Graph executed successfully",
        success: true,
        result
    })

})

export default app