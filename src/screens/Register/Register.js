import React, { Component } from 'react'
import RegisterView from './RegisterView'
import AsyncStorage from '@react-native-community/async-storage'

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  onRegistration = async () => {
    const { navigation } = this.props

    await AsyncStorage.setItem('userToken', 'new_user_in_app').then(() => {
      navigation.navigate('App')
    })
  }

  render () {
    const { navigation } = this.props;
    return (
      <RegisterView
        onRegistration={this.onRegistration}
        onSign={() => navigation.navigate('SignIn')}
      />
    )
  }
}

Register.propTypes = {}

export default Register
