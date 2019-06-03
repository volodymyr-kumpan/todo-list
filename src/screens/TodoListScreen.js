import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import TodoList from '../components/TodoList';
import NavHeaderTitle from '../components/NavHeaderTitle';
import NavHeaderButtons from '../components/NavHeaderButtons';
import { IconButton, LoadingIndicator } from '../ui';
import Colors from '../constants/Colors';

class TodoListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<NavHeaderTitle title={'Todo list'} />),
            headerRight: (
                <NavHeaderButtons>
                    <IconButton onPress={() => { navigation.getParam('onOpenCreateTodoScreenHandler')() }} icon='md-add' />
                </NavHeaderButtons>
            )
        };
    };

    onOpenCreateTodoScreenHandler = () => {
        this.props.navigation.navigate('CreateTodo');
    }

    onOpenTodoDetailsScreenHandler = (id) => {
        const todo = this.props.todos.find(todo => {
            return todo.id === id;
        });
        this.props.navigation.navigate('TodoDetails', { todo: todo });
    }

    render() {
        return (
            <View style={styles.container}>
                <TodoList
                    onPressTodo={this.onOpenTodoDetailsScreenHandler} />
                {
                    this.props.isLoading && <LoadingIndicator />
                }
            </View>
        );
    }

    componentDidMount() {
        this.props.navigation.setParams({ onOpenCreateTodoScreenHandler: this.onOpenCreateTodoScreenHandler });
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    isLoading: state.ui.isLoading
});

export default connect(
    mapStateToProps
)(TodoListScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    }
});