import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import user from '../../assets/images/user.png';

export default function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.heading}>Welcome back</Text>
        <Text style={styles.title}>Jacob Jones</Text>
      </View>
      <View>
        <Image source={user} />
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
