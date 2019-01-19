import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    onCreateTodoHandler = () => {
        this.props.onCreateTodo({
            title: this.state.title
        })
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View>
                    <TextInput
                        onChangeText={(title) => this.setState({ title })}
                        value={this.state.title}
                        placeholder="Title"
                    />
                </View>
                <View>
                    <Button
                        title="Create"
                        onPress={this.onCreateTodoHandler}
                        color='#0069d9' />
                </View>
            </View>
        );
    }
};

export default CreateTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        padding: 10,
        backgroundColor: '#F5FCFF',
    }
});

CreateTodo.propTypes = {
    onCreateTodo: PropTypes.func.isRequired
};