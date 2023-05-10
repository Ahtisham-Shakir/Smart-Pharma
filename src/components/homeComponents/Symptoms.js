import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Symptoms() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Common Symptoms</Text>
      <View style={styles.boxes}>
        <Box
          text={'Acidity'}
          src={require('../../assets/images/acidity.png')}
        />
        <Box
          text={'Anxiety'}
          src={require('../../assets/images/anxiety.png')}
        />
        <Box
          text={'BackPain'}
          src={require('../../assets/images/backpain.png')}
        />
        <Box text={'Blood'} src={require('../../assets/images/blood.png')} />
        <Box
          text={'Depression'}
          src={require('../../assets/images/depression.png')}
        />
        <Box
          text={'Diabeties'}
          src={require('../../assets/images/diabeties.png')}
        />
        <Box text={'Fever'} src={require('../../assets/images/fever.png')} />
        <Box
          text={'Hairfall'}
          src={require('../../assets/images/hairfall.png')}
        />
      </View>
    </View>
  );
}

const Box = ({text, src}) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.imgContainer}>
        <Image source={src} style={styles.img} />
      </View>
      <Text style={styles.text}>{text}</Text>
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
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  boxContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
  },
  img: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
  text: {
    marginVertical: 5,
    fontSize: 15,
  },
});
