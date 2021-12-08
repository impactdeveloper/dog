import axios from 'axios'

import CONFIG from '../config'

const BASE_PATH = CONFIG.BASE_PATH + '/api' || '/api'

const breedApiCalls = {
    listBreeds: () => axios.get(`${BASE_PATH}/breeds/list/all`),
    listBreedImages: (breedName) => axios.get(`${BASE_PATH}/breed/${breedName}/images`)
}

export default {
    breedApiCalls
}


