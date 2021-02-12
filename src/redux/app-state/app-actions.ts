import {
  ISetDone, ISetImportant, SET_DONE, SET_IMPORTANT, IEditItem,
  IDeleteItem, DELETE_ITEM, ISetData, SET_DATA, ISetTodoValue, ADD_VALUE_CHANGED, ITEM_EDIT
} from '.'



export const setDone = (id: string): ISetDone => ({ type: SET_DONE, id })
export const setImportant = (id: string): ISetImportant => ({ type: SET_IMPORTANT, id })
export const deleteItem = (id: string): IDeleteItem => ({ type: DELETE_ITEM, id })
export const setData = (value: string, id?: string): ISetData => ({ type: SET_DATA, value, id })
export const setTodoValue = (value: string): ISetTodoValue => ({
  type: ADD_VALUE_CHANGED,
  value
})
export const editItem = (value: string): IEditItem => ({ type: ITEM_EDIT, value })
