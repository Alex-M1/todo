import { AppStateType, deleteItem, setDone, setImportant, setData, editItem } from './../../redux'
import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStateToProps = (state: AppStateType) => ({
  listData: state.appReducer.appData,
  editValue: state.appReducer.editValue
})

export default connect(mapStateToProps, {
  setImportant, setDone, deleteItem, setData, editItem
})(TodoList)