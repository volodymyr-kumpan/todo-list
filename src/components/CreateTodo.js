import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

import { BaseButton } from '../ui';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    onCreateTodoHandler = () => {
        this.props.onCreateTodo({
            title: this.state.title
        })
        if (this.props.onTodoCreated) {
            this.props.onTodoCreated();
        }
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <TextInput
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    placeholder="Title"
                    autoFocus={true}
                />
                <BaseButton
                    onPress={this.onCreateTodoHandler}
                    color='#007bff'
                >
                    Create
                </BaseButton>
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