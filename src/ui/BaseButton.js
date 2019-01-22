import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const BaseButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
);

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    color: '#fff',
  }
});

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired
};