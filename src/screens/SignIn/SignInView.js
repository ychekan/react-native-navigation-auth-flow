import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { withTheme } from 'react-native-paper'
import PropTypes from 'prop-types'
import Layout from '../../layout/Layout'

const SignInView = ({ signInAsync, onRegistration }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleFroPage: {
      alignItems: 'center',
    },
    marginTop: {
      marginTop: 5,
    },
    registration: {},
  })

  return (
    <Layout barStyle="dark-content">
      <View style={styles.titleFroPage}>
        <Text>Sign In</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.marginTop}>
          <Button
            title="Sign in user"
            onPress={signInAsync}
          />
        </View>
        <View style={styles.marginTop}>
          <Button
            title="Go to registration"
            onPress={onRegistration}
          />
        </View>
      </View>
    </Layout>
  )
}

SignInView.propTypes = {
  signInAsync: PropTypes.func.isRequired,
  onRegistration: PropTypes.func.isRequired,
  onHome: PropTypes.func.isRequired,
}

export default SignInView;
