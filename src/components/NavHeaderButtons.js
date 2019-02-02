import React from 'react';
import { View, StyleSheet } from 'react-native';

const NavHeaderButtons = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

export default NavHeaderButtons;

const styles = StyleSheet.create({
    container: {
        marginRight: 6
    }
});