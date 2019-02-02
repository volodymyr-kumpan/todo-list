import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { P } from '../ui';

class TodoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.todo = props.todo;
    }

    render() {
        return (
            <View style={styles.container}>
                <P>{this.todo.title}</P>
                <P>{this.todo.description}</P>
            </View>
        );
    };
};

export default TodoDetails;

const styles = StyleSheet.create({
    container: {
        margin: 6
    }
});

TodoDetails.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};