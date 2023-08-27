import { StyleSheet, TextInput, View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomInput = ({
    title="",
    placeholder = '',
    value = '',
    isMandatory = false,
    autoCapitilize = 'none',
    autoComplete = 'off',
    inputMode = 'none',
    iconName = '',
    onChangeText = () => { } }) => {
    return (
        <View>
            {value !== '' && <Text style={styles.title}>{title} {isMandatory ? ' (*)' : ''}</Text>}
            <TextInput
                style={(isMandatory && value === '') ? [styles.input, styles.mandatory] : styles.input}
                placeholder={placeholder}
                value={value}
                autoCapitalize={autoCapitilize}
                autoComplete={autoComplete}
                inputMode={inputMode}
                onChangeText={onChangeText}
                placeholderTextColor={'#bfbfbf'}
            />
            {iconName !== '' && <Icon name={iconName} size={20} color="#bdbdbd" style={styles.icon} />}
        </View>
    )
};

export default CustomInput;

const styles = StyleSheet.create({
    title: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 10,
        position: 'relative'
    },
    mandatory: {
        borderBottomColor: '#ff0000',
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 20,
        marginRight: 15,
    }
});