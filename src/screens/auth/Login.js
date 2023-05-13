import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import logo from '../../assets/images/Vector.png';

const Login = ({navigation}) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // Function to handle change in input values
  const handleChange = (name, val) => {
    setLoginData(state => ({
      ...state,
      [name]: val,
    }));
  };

  // Function to login user
  const handleLogin = () => {
    if (!loginData.username || !loginData.password) {
      alert('Please fill all the fields');
    } else {
      alert(`${loginData.username} || ${loginData.password}`);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.imgContainer}>
        <Image source={logo} />
        <Text style={styles.h1}>Smart Pharma</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={'gray'}
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={val => handleChange('username', val)}
        />
        <TextInput
          placeholderTextColor={'gray'}
          style={styles.input}
          placeholder="Enter  Password"
          secureTextEntry
          onChangeText={val => handleChange('password', val)}
        />
      </View>
      <TouchableHighlight
        underlayColor={'#1F97D0'}
        style={styles.btn}
        onPress={handleLogin}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={styles.rContainer}
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.rtext}>
          Don't have an account?{' '}
          <Text
            style={{
              color: '#1F97D0',
              fontWeight: 'bold',
              borderBottomWidth: 1,
              borderBottomColor: '#1F97D0',
            }}>
            Sign Up{' '}
          </Text>
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(31, 151, 208, 0.3)',
  },
  imgContainer: {
    alignItems: 'center',
  },
  h1: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    paddingHorizontal: 15,
    marginVertical: 6,
    height: 50,
    borderRadius: 4,
    fontSize: 16,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F97D0',
    marginVertical: 5,
    borderRadius: 5,
    height: 50,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  rtext: {
    color: 'black',
    fontSize: 16,
  },
});
