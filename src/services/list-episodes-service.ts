import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { PodcastModel } from "../models/podcast-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async () : Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    
    const data = await repositoryPodcast()

    responseFormat = { statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }


    return responseFormat
}
