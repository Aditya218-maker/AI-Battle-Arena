import { ChatGoogle } from "@langchain/google";
import { config } from "../config/config.js";

export const geminiModel = new ChatGoogle({
    model:"gemini-flash-latest",
    apiKey: config.GEMINI_API_KEY
});