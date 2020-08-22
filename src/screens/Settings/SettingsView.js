import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Layout from '../../layout/Layout'

const SettingsView = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Layout>
      <View style={styles.container}>
        <Text>Setting screen</Text>
      </View>
    </Layout>
  )
}

// HomeView.propTypes = {
//   data: PropTypes.shape({}).isRequired,
//   theme: PropTypes.shape({
//     sizes: PropTypes.shape({
//       defaultMarginTop: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default (SettingsView)
