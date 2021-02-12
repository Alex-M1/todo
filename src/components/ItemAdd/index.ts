import { AppStateType, setTodoValue, setData } from './../../redux'
import { connect } from 'react-redux'
import ItemAdd from './ItemAdd'
import { compose } from 'redux'
import { withTranslation } from 'react-i18next'

const mapStateToProps = (state: AppStateType) => ({
  inputValue: state.appReducer.addTodoValue
})

export default compose(
  connect(mapStateToProps, {
    setTodoValue, setData
  }),
  withTranslation()
)(ItemAdd) as React.ComponentType