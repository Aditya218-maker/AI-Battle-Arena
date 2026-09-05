import express from 'express'
import useGraph from "./ai/graph.ai.js"
import runGraph from './ai/graph.ai.js'

const app = express()

app.get('/use-graph', async (req, res) => {
    const result = await runGraph("write an code for factorial function in js")
    res.json(result)
})

export default app