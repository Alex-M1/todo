import React, { SyntheticEvent } from 'react'
import { ISetTodoValue, ISetData } from '../../redux'
import './ItemAdd.scss'

function ItemAdd({ inputValue, setTodoValue, setData, t }: IProps) {
  const inputChanged = (e: SyntheticEvent<HTMLInputElement>) => {
    setTodoValue(e.currentTarget.value)
  }

  const onButtonClick = (e: SyntheticEvent) => {
    e.preventDefault()
    if (inputValue) {
      setData(inputValue)
    }
  }

  return (
    <form className='add-form' onSubmit={onButtonClick}>
      <input type='text'
        role='add-input'
        className='form-control'
        onChange={inputChanged}
        value={inputValue}
        placeholder={t('writeName')} />
      <button role='add-btn' className='btn btn-outline-primary'>{t("add-todo")}</button>
    </form>
  )
}

export default ItemAdd

interface IProps {
  inputValue: string
  setTodoValue: (value: string) => ISetTodoValue
  setData: (value: string) => ISetData
  t: (lang: string) => string
}