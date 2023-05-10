import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {symptoms} from '../../assets/data';

export default function Symptoms() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Common Symptoms</Text>
      <View>
        {symptoms.map(item => (
          <Box text={item} src={require('../../assets/images/blood.png')} />
        ))}
      </View>
    </View>
  );
}

const Box = ({text, src}) => {
  return (
    <View>
      <Image source={src} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 19,
  },
  title: {
    color: '#02100F',
    fontSize: 15,
    fontWeight: '500',
  },
});
