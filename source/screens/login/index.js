import React, {useRef, useState, useContext} from 'react';
import {View, Text, KeyboardAvoidingView, Alert, Button} from 'react-native';
import {styles} from './styles';
import {Input} from '../../components/index';
import {AuthContext} from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setIsNotValid] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const {setAuth} = useContext(AuthContext);

  const onChangeInput = (value, type) => {
    if (type === 'email') {
      setEmail(value);
    }
    if (type === 'password') {
      setPassword(value);
    }

    if (
      emailInputRef.current.state.validate &&
      passwordInputRef.current.state.validate
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  const handleAuth = () => {
    if (email !== 'daniel@gmail.com') {
      Alert.alert('Error', 'Revisa los tu correo o contraseña', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    setAuth({
      email,
      token: '123456789',
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}
      enabled>
      <View style={styles.containerCard}>
        <Text style={styles.formTitle}>Login</Text>
        <View style={styles.formContainer}>
          <Input
            ref={emailInputRef}
            label="Email"
            placeholder="Ingresa tu correo"
            placeholderTextColor={'#8E8E93'}
            keyboardType="email-address"
            type="email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeInput={value => onChangeInput(value, 'email')}
            value={email}
            maxLength={60}
          />
          <Input
            ref={passwordInputRef}
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={'#8E8E93'}
            type="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeInput={value => onChangeInput(value, 'password')}
            value={password}
            maxLength={20}
          />
        </View>
        <Button
          title={'Ingresar'}
          onPress={() => handleAuth()}
          disabled={isNotValid}
          color="#00a680"
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
