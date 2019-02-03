import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createTodo } from '../store/actions';
import { TextButton, DefaultTextInput } from '../ui';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }

    onCreateTodoHandler = () => {
        this.props.onCreateTodo({
            title: this.state.title,
            description: this.state.description
        })
        if (this.props.onTodoCreated) {
            this.props.onTodoCreated();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <DefaultTextInput
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    placeholder="Title"
                    autoFocus={true}
                />
                <DefaultTextInput
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={4}
                />
                <TextButton
                    onPress={this.onCreateTodoHandler}
                    text={'Create'}
                />
            </View>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    onCreateTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
    null,
    mapDispatchToProps
)(CreateTodo);

const styles = StyleSheet.create({
    container: {
        margin: 25,
        padding: 10
    }
});

CreateTodo.propTypes = {
    onCreateTodo: PropTypes.func.isRequired
};