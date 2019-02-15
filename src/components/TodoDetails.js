import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { P, DefaultText } from '../ui';
import Colors from '../constants/Colors';

const Label = ({ text }) => (
    <View
        style={
            {
                height: 50,
                backgroundColor: Colors.Info,
                justifyContent: 'flex-end',
                padding: 6,
            }
        }
    >
        <DefaultText>
            {text.toUpperCase()}
        </DefaultText>
    </View>
);

const Desc = ({ text }) => (
    <View
        style={
            {
                margin: 6
            }
        }
    >
        <P>{text}</P>
    </View>
);

class TodoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.todo = props.todo;
    }

    render() {
        return (
            <View style={styles.container}>
                <Label text={'title'} />
                <Desc text={this.todo.title} />
                <Label text={'description'} />
                <Desc text={this.todo.description} />
            </View>
        );
    };
};

export default TodoDetails;

const styles = StyleSheet.create({
    container: {
    }
});

TodoDetails.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};