import { call, put, select, takeEvery } from 'redux-saga/effects'
import Api from '../api'
import * as types from '../types'

function* fetchBreeds(){
    try {
        let breeds = yield call(Api.breedApiCalls.listBreeds)
        yield put({ type: types.API_LIST_BREEDS_SUCCESS, breeds :breeds.data})
    } catch (e) {
        console.log("error in l 58", e)
    }
}

function* fetchBreedIMages(action){
    try {
        const { breedName } = action
        let breedimages = yield call(Api.breedApiCalls.listBreedImages,breedName)
        yield put({ type: types.API_LIST_BREED_IMAGES_SUCCESS, breedimages :breedimages.data})
    } catch (e) {
        console.log("error in l 58", e)
    }
}
function* breedApiWatcher() {
    yield takeEvery(types.LIST_BREEDS, fetchBreeds)
    yield takeEvery(types.LIST_BREED_IMAGES, fetchBreedIMages)
}

export default breedApiWatcher
