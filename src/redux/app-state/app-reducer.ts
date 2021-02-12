import {
  ADD_VALUE_CHANGED,
  AppReducer, DELETE_ITEM, IAppState, ITEM_EDIT, REFRESH_ITEM,
  SET_DATA, SET_DONE, SET_IMPORTANT,
} from '.'
import { v4 as uuid } from 'uuid'
import { getDataFromLs, setNewData } from './services'

const initialState: IAppState = {
  appData: getDataFromLs(),
  addTodoValue: '',
  editValue: ''
}

export default function (state = initialState, action: AppReducer) {
  switch (action.type) {
    case SET_DONE:
      setNewData(action.id, 'done')
      return {
        ...state,
        appData: getDataFromLs()
      }
    case SET_IMPORTANT:
      setNewData(action.id, 'important')
      return {
        ...state,
        appData: getDataFromLs()
      }
    case SET_DATA:
      const data = {
        id: action.id ? action.id : uuid(),
        name: action.value,
        important: '',
        done: ''
      }
      localStorage.setItem(`todo_${data.id}`, JSON.stringify(data))
      return {
        ...state,
        addTodoValue: '',
        appData: getDataFromLs()
      }
    case DELETE_ITEM:
      localStorage.removeItem(`todo_${action.id}`)
      return {
        ...state,
        appData: getDataFromLs()
      }
    case ADD_VALUE_CHANGED: {
      return {
        ...state,
        addTodoValue: action.value,
      }
    }
    case ITEM_EDIT:
      return {
        ...state,
        editValue: action.value
      }
    default:
      return state
  }
}

