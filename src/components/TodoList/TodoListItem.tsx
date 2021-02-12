import React, { SyntheticEvent, useState } from 'react'
import { IDeleteItem, IEditItem, ISetData, ISetDone, ISetImportant } from '../../redux'
import ItemListButton from './ItemListButton'
import ItemName from './ItemName'

function TodoListItem(props: IProps) {
  const {
    name, id, important, done, editValue, setDone,
    setImportant, deleteItem, setData, editItem
  } = props

  const [style, setStyle] = useState({ span: 'inline-block', input: 'none' })

  function onEditClick() {
    setStyle({ span: 'none', input: 'inline-block' })
    editItem(name)
  }

  function onLabelClick() {
    setDone(id)
  }

  function onBlurInput() {
    setData(editValue, id)
    setStyle({ span: 'inline-block', input: 'none' })
  }

  function editInput(e: SyntheticEvent<HTMLInputElement>) {
    editItem(e.currentTarget.value)
    setData(editValue, id)
  }

  const itemNameProps = {
    onLabelClick, onBlurInput, editInput, style, name, editValue
  }

  return (
    <li className={`todo-list-item list-group-item ${done} ${important}`} >
      <ItemName {...itemNameProps} />
      <span className='todo-list-item-buttons'>
        <ItemListButton config='edit' role='edit' itemAction={onEditClick} />
        <ItemListButton config='important' role='important' id={id} itemAction={setImportant} />
        <ItemListButton config='delete' role='delete' id={id} itemAction={deleteItem} />
      </span>
    </li>
  )
}

export default TodoListItem

interface IProps {
  name: string
  important: string
  id: string
  done: string
  editValue: string
  setImportant: (id: string) => ISetImportant
  setDone: (id: string) => ISetDone
  deleteItem: (id: string) => IDeleteItem
  setData: (value: string, id: string) => ISetData
  editItem: (value: string) => IEditItem
}