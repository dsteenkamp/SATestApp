import * as types from './types'

export const saveFormData = (data) => {
  console.log('save form data')
  return {
    type: types.SAVE_FORM,
    data
  }
}
