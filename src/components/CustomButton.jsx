import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustomButton = ({
    title = "",
    disabled = false,
    onPress = () => { } }) => {
    return (
        <TouchableOpacity
            style={disabled ? [styles.button, styles.disabled] : styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db', // Change this to the color you want
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff', // Text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabled: {
        backgroundColor: '#bdbdbd'
    }
});