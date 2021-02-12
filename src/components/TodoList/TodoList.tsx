import React from 'react'
import { ISetData, IAppData, IDeleteItem, ISetDone, ISetImportant, IEditItem } from '../../redux'
import './TodoList.scss'
import TodoListItem from './TodoListItem'

function TodoList(props: IProps) {
  const { listData, ...funcs } = props
  const listItem = listData.map((data) => <TodoListItem {...data}{...funcs} key={data.id} />)

  return (
    <ul className="todo-list list-group">
      {listItem}
    </ul>
  )
}

export default TodoList

interface IProps {
  listData: IAppData[]
  editValue: string
  setImportant: (id: string) => ISetImportant
  setDone: (id: string) => ISetDone
  deleteItem: (id: string) => IDeleteItem
  setData: (value: string, id: string) => ISetData
  editItem: (value: string) => IEditItem
}