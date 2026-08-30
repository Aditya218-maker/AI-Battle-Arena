import { config } from "dotenv";
config();
/**
 * We will define API keys of our three AI agents here which are basically strings
 */

type CONFIG = {
    GOOGLE_API_KEY: string;
    MISTRAL_APIA_KEY: string;
    COHERE_API_KEY: string;
}

