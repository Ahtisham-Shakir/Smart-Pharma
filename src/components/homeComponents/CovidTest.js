import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import waves from '../../assets/images/waves.png';

export default function CovidTest() {
  return (
    <View style={styles.covidContainer}>
      <Text style={styles.title}>Covid Test</Text>
      <Image style={styles.img} source={waves} />
      <Text style={styles.bottomText}>7.75 Hours</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  covidContainer: {
    backgroundColor: '#fff',
    paddingVertical: 23,
    flex: 0.5,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 23,
    marginLeft: 19,
    color: '#264653',
  },
  img: {
    width: '100%',
    overflow: 'hidden',
  },
  bottomText: {
    marginLeft: 19,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});
