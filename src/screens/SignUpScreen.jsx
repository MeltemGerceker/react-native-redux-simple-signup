import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  const handleChangeText = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value
    };
    
    dispatch({
      type: actionTypes.CHANGE_USER,
      payload: updatedUser
    });

  };

  const handlePress = () => {
    if (user.name === '' || user.lastname === '' || user.phone === '' || user.email === '')
      return;
    navigation.navigate("Home");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Fill in the form to sign up.</Text>
      <CustomInput
        title='Name'
        placeholder='Enter name'
        value={user?.name}
        onChangeText={(text) => handleChangeText('name', text)}
        isMandatory
        autoCapitilize='words'
        autoComplete='off'
        inputMode='text'
      />
      <CustomInput
        title='Lastname'
        placeholder='Enter lastname'
        value={user?.lastname}
        onChangeText={(text) => handleChangeText('lastname', text)}
        isMandatory
        autoCapitilize='words'
        autoComplete='off'
        inputMode='text'
      />
      <CustomInput
        title='Phone'
        placeholder='Enter phone'
        value={user?.phone}
        onChangeText={(text) => handleChangeText('phone', text)}
        isMandatory
        autoCapitilize='none'
        autoComplete='off'
        iconName='call-outline'
      />
      <CustomInput
        title='E-mail'
        placeholder='Enter e-mail'
        value={user?.email}
        onChangeText={(text) => handleChangeText('email', text)}
        isMandatory
        autoCapitilize='none'
        autoComplete='email'
        inputMode='email'
        iconName='mail-outline'
      />
      <CustomButton
        title="Sign Up"
        onPress={handlePress}
        disabled={user.name === '' || user.lastname === '' || user.phone === '' || user.email === ''}
      />
    </View>
  )
};

export default SignUpScreen;

const styles = StyleSheet.create({
  form: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },
});