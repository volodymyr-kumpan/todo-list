import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import NavHeaderTitle from '../components/NavHeaderTitle';
import CreateTodo from '../components/CreateTodo';

class CreateTodoScreen extends React.Component {
    static navigationOptions = {
        headerTitle: (<NavHeaderTitle title={'Create todo'} />)
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