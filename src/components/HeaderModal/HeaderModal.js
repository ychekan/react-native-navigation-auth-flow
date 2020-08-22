import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text
} from 'react-native';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

function HeaderModal({
  theme, title, onPress, cancel, titleStyle
}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    block: {
      flexDirection: 'row',
      margin: theme.sizes.marginDefault,
    },
    titleText: {
      flex: 1,
      color: theme.colors.moreText,
      fontSize: theme.sizes.offerPadding,
      fontWeight: '600',
      letterSpacing: -0.41,
      lineHeight: theme.sizes.defaultTop,
      alignSelf: 'center',
      // paddingRight: theme.sizes.defaultMarginTop,
    },
    doneText: {
      color: theme.colors.defaultCard,
      fontWeight: '600',
      lineHeight: theme.sizes.defaultTop,
    }
  });

  return (
    <View style={styles.block}>
      <TouchableOpacity onPress={onPress}>
        {
          cancel ? (
            <Text style={styles.doneText}>Cancel</Text>
          ) : (
            <Icon
              name="arrowleft"
              color={theme.colors.primary}
              size={theme.sizes.lineHeight}
            />
          )
        }
      </TouchableOpacity>
      <View style={[styles.container, titleStyle]}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
    </View>
  );
}

HeaderModal.propTypes = {
  onPress: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      moreText: PropTypes.string.isRequired,
    }).isRequired,
    sizes: PropTypes.shape({
      lineHeight: PropTypes.number.isRequired,
      fullScreenIcon: PropTypes.number.isRequired,
      defaultTop: PropTypes.number.isRequired,
      marginDefault: PropTypes.number.isRequired,
      offerPadding: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  cancel: PropTypes.bool,
  titleStyle: PropTypes.shape({})
};

HeaderModal.defaultProps = {
  cancel: false,
  titleStyle: {}
};

export default withNavigation(withTheme(HeaderModal));