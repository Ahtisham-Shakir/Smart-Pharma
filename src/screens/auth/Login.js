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
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
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
    if (!loginData.email || !loginData.password) {
      alert('Please fill all the fields');
    } else {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(() => {
          alert('Logged in Successfully!');
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            alert('Invalid Email or Password');
          } else if (error.code === 'auth/too-many-requests') {
            alert('Too many failed attempts try again shortly');
          } else if (error.code === 'auth/user-not-found') {
            alert('Account not found!');
          }
          console.log('login ', error);
        })
        .finally(() => {
          setLoading(false);
        });
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
          onChangeText={val => handleChange('email', val)}
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
        disabled={loading}
        underlayColor={'#1F97D0'}
        style={styles.btn}
        onPress={handleLogin}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading && (
            <ActivityIndicator style={{marginRight: 5}} color={'#fff'} />
          )}
          <Text style={styles.btnText}>LOGIN</Text>
        </View>
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
