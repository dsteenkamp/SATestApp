import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import * as recipesReducer from './recipes'
import { saveInputForm } from './form'

export default combineReducers({
  recipesReducer,
  users: saveInputForm,
  form: formReducer,
})
