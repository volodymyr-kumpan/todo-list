import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const LoadingIndicator = () => {
  return (
    <View style = {styles.container}>
       <ActivityIndicator
          animating = {true}
          color = {Colors.Primary}
          size = "large"
          style = {styles.activityIndicator}/>
    </View>
  )
};

export default LoadingIndicator;

const styles = StyleSheet.create({
    container: {
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       bottom: 0,
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: Colors.Secondary,
       opacity: 0.25
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    }
});