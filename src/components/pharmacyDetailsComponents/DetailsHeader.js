import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function DetailsHeader() {
  return (
    <View style={styles.HeaderConatainer}>
      <View style={styles.icon}>
        <MaterialIcons name="chevron-thin-left" size={14} color={'#677294'} />
      </View>
      <Text style={styles.title}>Pharmacy Details</Text>
      <EvilIcons name="search" size={24} color="#677294" />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 37,
    marginHorizontal: 22,
  },
  icon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 19,
  },
  title: {
    fontSize: 18,
    color: '#264653',
    fontWeight: '700',
    flex: 1,
  },
});
