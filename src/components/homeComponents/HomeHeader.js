import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import user from '../../assets/images/user.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {useGlobalState} from '../../context/userContext';

export default function HomeHeader() {
  const {user} = useGlobalState();
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        alert('You have been logged out');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.heading}>Welcome back</Text>
        <Text style={styles.title}>Ahtisham</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleLogout}>
          <Image source={user} />
        </TouchableOpacity>
        <Pressable onPress={handleLogout}>
          <Text style={{color: 'black'}}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 12,
    color: '#02100f',
  },
  title: {
    fontSize: 18,
    color: '#02100f',
    marginTop: 12,
  },
});
