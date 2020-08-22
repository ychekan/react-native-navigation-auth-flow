import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout'

const RegisterView = ({ onRegistration, onSign }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    marginTop: {
      marginTop: 5,
    },
    titleForPage: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
    <Layout>
      <View style={styles.titleForPage}>
        <Text>Registration</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.marginTop}>
          <Button
            title="Go to sign in"
            onPress={onSign}
          />
        </View>
        <View style={styles.marginTop}>
          <Button
            title="Registration user"
            onPress={onRegistration}
          />
        </View>
      </View>
    </Layout>
  );
};

RegisterView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
  onSign: PropTypes.func.isRequired,
};

export default RegisterView;
