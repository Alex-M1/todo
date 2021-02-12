import { SET_DONE, SET_IMPORTANT, DELETE_ITEM, SET_DATA, ADD_VALUE_CHANGED, ITEM_EDIT } from '.'


export interface IAppState {
  appData: IAppData[],
  addTodoValue: string
  editValue: string
}

export interface IAppData {
  name: string
  important: string
  id: string
  done: string
}

export interface ISetImportant {
  type: typeof SET_IMPORTANT
  id: string
}

export interface ISetDone {
  type: typeof SET_DONE
  id: string
}

export interface IDeleteItem {
  type: typeof DELETE_ITEM
  id: string
}

export interface ISetData {
  type: typeof SET_DATA,
  value: string
  id?: string
}

export interface ISetTodoValue {
  type: typeof ADD_VALUE_CHANGED
  value: string
}

export interface IEditItem {
  type: typeof ITEM_EDIT
  value: string
}
export type AppReducer = ISetDone | ISetImportant | IDeleteItem | ISetData | ISetTodoValue | IEditItem