import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function CovidPrecautions() {
  return (
    <View style={styles.covidContainer}>
      <Text style={styles.title}>Precautions For Covid 19</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Explore Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  covidContainer: {
    backgroundColor: '#fff',
    paddingTop: 23,
    flex: 0.5,
    marginLeft: 10,
    borderRadius: 10,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 19,
    marginRight: 30,
    color: '#264653',
    lineHeight: 24,
  },
  text: {
    fontSize: 10,
    paddingHorizontal: 17,
    marginVertical: 5,
  },
  btn: {
    backgroundColor: '#1F97D0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    padding: 8,
    overflow: 'hidden',
  },
  btnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
});
