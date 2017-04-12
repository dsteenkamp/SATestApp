import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { saveFormData } from '../actions/form'


const submit = (values, dispatch)  => {
  console.log('submit', values)
  dispatch(saveFormData(values))
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const Form = ({ handleSubmit }) => (
  <View style={styles.container}>
    <Text style={styles.label}>First Name:</Text>
    <Field name="firstName" component={renderInput} />
    <Text style={styles.label}>Last Name:</Text>
    <Field name="lastName" component={renderInput} />
    <TouchableOpacity onPress={handleSubmit(submit)}>
      <Text style={styles.button}>Submit</Text>
    </TouchableOpacity>
  </View>
)


export default reduxForm({
  form: 'test'
})(Form)

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  label: {
    marginTop: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  }
})
