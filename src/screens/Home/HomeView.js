import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import Layout from '../../layout/Layout'

const HomeView = ({ onModal }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  return (
    <Layout>
      <Button
        title="Modal"
        onPress={onModal}
      />
      <View style={styles.container}>
        <Text>Home screen</Text>
      </View>
    </Layout>
  );
};

export default (HomeView);
