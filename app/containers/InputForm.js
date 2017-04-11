import React, {Component} from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field }  from 'redux-form'

const{
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity,
    form,
    label
} = ReactNative


const submit = values => {
  console.log('submitting form', values)
}
class InputForm extends Component{
    handleSubmit = (values) => {
      // Do something with the form values
      console.log(values);
    }
    render(){
        const { handleSubmit } = this.props;
        return (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" component="input" type="text"/>
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field name="email" component="input" type="email"/>
                </div>
                <button type="submit">Submit</button>
              </form>
            );
    }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

InputForm = reduxForm({
  form: 'contact' // a unique name for this form
})(InputForm);

function mapStateToProps(state){
    return{
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(InputForm);
