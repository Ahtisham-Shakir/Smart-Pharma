import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/images/Vector.png';
import Bottom from '../../assets/images/splashBottom.png';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.splashTitle}>HealthKeys</Text>
      <Image source={Bottom} style={styles.bottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64dc97',
  },
  splashTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 5,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
  },
});
