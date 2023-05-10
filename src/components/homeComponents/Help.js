import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import help from '../../assets/images/help.png';

export default function Help() {
  return (
    <View style={styles.helpContainer}>
      <Text style={styles.heading}>HOW MAY I HELP YOU?</Text>
      <View style={{alignItems: 'center'}}>
        <Image source={help} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  helpContainer: {
    paddingHorizontal: 24,
  },
  heading: {
    marginVertical: 19,
    fontSize: 18,
    color: '#264653',
    textAlign: 'left',
  },
});
