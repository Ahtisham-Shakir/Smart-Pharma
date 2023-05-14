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

const Signup = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Function to handle change in input values
  const handleChange = (name, val) => {
    setUserData(state => ({
      ...state,
      [name]: val,
    }));
  };

  // Function to Register user
  const handleSignup = () => {
    if (!userData.username || !userData.email || !userData.password) {
      alert('Please fill all the fields');
    } else {
      setLoading(true);
      auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(res => {
          // console.log('res during signed in', res);
          alert('Account has been created successfully!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }

          if (error.code === 'auth/weak-password') {
            alert('Password should be at least 6 characters');
          }

          console.error(error);
        })
        .finally(() => {
          setUserData({
            username: '',
            email: '',
            password: '',
          });
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
          placeholder="Enter Name"
          onChangeText={val => handleChange('username', val)}
        />
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
        onPress={handleSignup}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading && (
            <ActivityIndicator style={{marginRight: 5}} color={'#fff'} />
          )}
          <Text style={styles.btnText}>Sign Up</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={styles.rContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.rtext}>
          Already have an account?{' '}
          <Text
            style={{
              color: '#1F97D0',
              fontWeight: 'bold',
              borderBottomWidth: 1,
              borderBottomColor: '#1F97D0',
            }}>
            Login{' '}
          </Text>
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Signup;

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
