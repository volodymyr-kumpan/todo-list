import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { DefaultText } from '../ui/index';

const NavHeaderTitle = ({ title }) => (
    <View style={styles.container}>
        <DefaultText>{title}</DefaultText>
    </View>
);

export default NavHeaderTitle;

const styles = StyleSheet.create({
    container: {
        marginLeft: 6
    }
});

NavHeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
};