import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import user from '../../assets/images/user.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default function HomeHeader() {
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
        <Text style={styles.title}>Jacob Jones</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => alert('clicked')}>
          <Image source={user} />
        </TouchableOpacity>
        <TouchableHighlight onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableHighlight>
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
