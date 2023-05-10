import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function PharmacyRatings() {
  return (
    <View style={styles.RatingsContainer}>
      <RatingsCard number={100} text={'Running'} />
      <RatingsCard number={500} text={'Ongoing'} />
      <RatingsCard number={700} text={'Delivered'} />
    </View>
  );
}

const RatingsCard = ({number, text}) => {
  return (
    <View style={styles.cardBg}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  RatingsContainer: {
    backgroundColor: '#fff',
    marginVertical: 24,
    marginHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  cardBg: {
    backgroundColor: '#eee',
    padding: 17,
    borderRadius: 10,
  },
  number: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    color: '#677294',
  },
});
