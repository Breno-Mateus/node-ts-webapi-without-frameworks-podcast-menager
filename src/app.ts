import * as http from "http"
import dotenv from "dotenv"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { assert } from "console"
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"

dotenv.config()

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) =>{
    
    const baseUrl = req.url?.split("?")[0]

    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res)
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(req, res)
    }
}