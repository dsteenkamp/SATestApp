import * as types from '../actions/types'

const initialState = []

export const saveInputForm = (state = initialState, action) => {
  console.log('reducer - saveInputForm')
  switch (action.type) {
    case types.SAVE_FORM:
      return [
        ...state,
        {
          firstName: action.data.firstName,
          lastName: action.data.lastName
        }
      ]
    default:
      return state
  }
}
