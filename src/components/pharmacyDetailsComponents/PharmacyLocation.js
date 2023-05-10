import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import map from '../../assets/images/map.png';

export default function PharmacyLocation() {
  return (
    <View style={styles.container}>
      <Image source={map} style={styles.map} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: 250,
  },
  map: {
    width: '100%',
    height: '100%',
    marginTop: -25,
  },
});
