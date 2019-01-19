import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SideMenuScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Todo List
                </Text>
            </View>
        );
    }
}

export default SideMenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});