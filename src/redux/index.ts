import store, { AppStateType } from './store'
import {
  AppReducer, IAppData, IAppState, ISetDone, editItem,
  ISetImportant, setImportant, setDone, IDeleteItem,
  deleteItem, ISetData, setData, ISetTodoValue, setTodoValue, IEditItem
} from './app-state'


export {
  store
}

export {
  AppStateType, IAppData, IAppState,
  ISetDone, ISetImportant, AppReducer,
  ISetTodoValue, IEditItem,
  ISetData, IDeleteItem
}

export {
  setTodoValue, setData, editItem,
  setImportant, setDone, deleteItem
}

