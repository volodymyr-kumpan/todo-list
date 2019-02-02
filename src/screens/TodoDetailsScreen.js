import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { deleteTodo } from '../store/actions';
import { IconButton } from '../ui';
import Colors from '../constants/Colors';
import TodoDetails from '../components/TodoDetails';
import NavHeaderTitle from '../components/NavHeaderTitle';
import NavHeaderButtons from '../components/NavHeaderButtons';

class TodoDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<NavHeaderTitle title={'Todo details'} />),
            headerRight: (
                <NavHeaderButtons>
                    <IconButton onPress={() => { navigation.getParam('onDeleteTodoHandler')() }} icon='md-trash' />
                </NavHeaderButtons>
            )
        };
    };

    constructor(props) {
        super(props);
        this.todo = this.props.navigation.getParam('todo', {});
    }

    onDeleteTodoHandler = () => {
        this.props.onDeleteTodo(this.todo.id);
        this.props.navigation.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TodoDetails todo={this.todo} />
            </View>
        );
    }

    componentDidMount() {
        this.props.navigation.setParams({ onDeleteTodoHandler: this.onDeleteTodoHandler });
    }
}

const mapDispatchToProps = dispatch => ({
    onDeleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(
    null,
    mapDispatchToProps
)(TodoDetailsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    }
});