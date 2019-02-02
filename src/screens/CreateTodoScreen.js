import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { DefaultText } from '../ui';
import CreateTodo from '../components/CreateTodo';

class CreateTodoScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <DefaultText>{'Create todo'}</DefaultText>
    };

    onTodoCreatedHandler = () => {
        this.props.navigation.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <CreateTodo onTodoCreated={this.onTodoCreatedHandler} />
            </View>
        );
    }
}

export default CreateTodoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    }
});