import { config } from "dotenv";
config();
/**
 * We will define API keys of our three AI agents here which are basically strings
 */

type CONFIG = {
    readonly GEMINI_API_KEY: string; //means these properties(API KEYs) can't be changed in future
    readonly MISTRAL_API_KEY: string;
    readonly COHERE_API_KEY: string;
}

export const app_config: CONFIG = {
    GEMINI_API_KEY : process.env.GOOGLE_API_KEY || "",
    MISTRAL_API_KEY : process.env.MISTRAL_API_KEY || "",
    COHERE_API_KEY : process.env.COHERE_API_KEY || ""
}

export default app_config;