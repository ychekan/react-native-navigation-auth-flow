import React, { useState } from 'react'
import { Animated, View, Text, Dimensions, StyleSheet } from 'react-native'
import ModalLayout from '../../layout/ModalLayout'
import { withTheme } from 'react-native-paper'
import HeaderModal from '../../components/HeaderModal/HeaderModal'
import PropTypes from 'prop-types';

const ModalView = ({ theme, navigation }) => {
  const styles = StyleSheet.create({
    popup: {
      flex: 1,
      backgroundColor: theme.colors.defaultBackground,
      borderTopLeftRadius: theme.sizes.ten,
      borderTopRightRadius: theme.sizes.ten,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    mainBlock: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
    },
  })

  const [models] = useState({
    animation: new Animated.Value(1),
  })

  const { animation } = models

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * Dimensions.get('window').height],
        }),
      },
    ],
  }

  return (
    <ModalLayout>
      <Animated.View style={[styles.popup, slideUp]}>
        <View style={styles.mainBlock}>
          <View style={styles.container}>
            <HeaderModal
              cancel
              title='Modal title'
              onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1 }}>
              <Text>Modal page</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </ModalLayout>
  )
}

ModalView.propTypes = {
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      ten: PropTypes.number.isRequired,
    }).isRequired,
    colors: PropTypes.shape({
      defaultBackground: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default withTheme(ModalView)
