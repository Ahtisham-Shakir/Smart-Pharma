import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// images
import topBars from '../../assets/images/topBars.png';
import bottomBars from '../../assets/images/bottomBars.png';

export default function Appointments() {
  return (
    <View style={styles.appointmentsContainer}>
      <Text style={styles.heading}>Upcomming Appointments</Text>
      <View style={styles.imageContainer}>
        <Image source={topBars} />
        <Image source={bottomBars} />
      </View>
      <Text style={styles.bottomDates}>
        30-Nov {'  '} 07-Dec {'  '} 14-Dec
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appointmentsContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 10,
    marginLeft: 10,
  },
  heading: {
    fontSize: 18,
    color: '#264653',
    fontWeight: '500',
    lineHeight: 23.44,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  bottomDates: {
    fontSize: 11,
    color: '#264653',
    fontWeight: '500',
  },
});
