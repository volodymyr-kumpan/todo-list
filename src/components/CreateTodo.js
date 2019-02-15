import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createTodo } from '../store/actions';
import { TextButton, DefaultTextInput, TextArea } from '../ui';

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
                <View style={styles.container1}>
                    <DefaultTextInput
                        onChangeText={(title) => this.setState({ title })}
                        value={this.state.title}
                        placeholder="Title"
                        autoFocus={true}
                    />
                    <TextArea
                        onChangeText={(description) => this.setState({ description })}
                        value={this.state.description}
                        placeholder="Description"
                    />
                </View>
                <View style={styles.container2}>
                    <TextButton
                        onPress={this.onCreateTodoHandler}
                        text={'Create'}
                    />
                </View>
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
        margin: 25
    },
    container1: {        
    },
    container2: {
        alignItems: 'flex-end'
    }
});

CreateTodo.propTypes = {
    onCreateTodo: PropTypes.func.isRequired
};