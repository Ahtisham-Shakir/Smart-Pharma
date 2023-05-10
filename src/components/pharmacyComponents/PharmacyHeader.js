import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/Entypo';

export default function PharmacyHeader() {
  return (
    <View style={styles.HeaderConatainer}>
      <View style={styles.icon}>
        <MaterialIcons name="chevron-thin-left" size={14} color={'#677294'} />
      </View>
      <Text style={styles.title}>Pharmacy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 37,
  },
  icon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 19,
  },
  title: {
    fontSize: 18,
    color: '#264653',
    fontWeight: '700',
  },
});
