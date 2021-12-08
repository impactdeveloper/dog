import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import CONFIG from '../config'
import reducers from './reducers'
import sagas from './sagas'
import SELECTORS from './selectors'

const APP_DEFAULTS = fromJS({
    breeds: {},
    breedImages: {}
  })

const initialState = fromJS({
    app: APP_DEFAULTS
  })

const sagaMiddleware = createSagaMiddleware()
const extras = []
const middleware = [
  sagaMiddleware
]

if (CONFIG.NODE_ENV === 'development') {
  console.info('running in dev')
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    extras.push(devToolsExtension({ trace: true }))
  }
}

const store = createStore(
  combineReducers({
    ...reducers
  }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...extras
  )
)

sagaMiddleware.run(sagas.breedApiWatcher)

export default store
export {
  SELECTORS,
  APP_DEFAULTS
}
