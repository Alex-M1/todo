import { IAppData } from "."

export const getDataFromLs = (): IAppData[] => {
  return Object.keys(localStorage)
    .filter((el) => el.split('_')[0] === 'todo')
    .map(item => JSON.parse(localStorage.getItem(item)))
}

export const setNewData = (id: string, changedData: 'important' | 'done') => {
  const item = JSON.parse(localStorage.getItem(`todo_${id}`))

  localStorage.setItem(`todo_${id}`, JSON.stringify({
    ...item,
    [changedData]: item[changedData] ? '' : changedData
  }))
}


