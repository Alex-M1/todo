import { combineReducers, createStore } from 'redux'
import { appReducer } from './app-state'

const reducers = combineReducers({
  appReducer,

})

const store = createStore(reducers)
export default store

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>