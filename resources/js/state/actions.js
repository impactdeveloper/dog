import * as types from "./types";

const breedActions = {
    listBreeds: () => ({
        type: types.LIST_BREEDS
    }),
    listbreedImages: (breedName) => ({
        type: types.LIST_BREED_IMAGES,
        breedName:breedName
    })
}

export {
    breedActions
}
