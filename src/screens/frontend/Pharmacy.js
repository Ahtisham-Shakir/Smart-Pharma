import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import PharmacyHeader from '../../components/pharmacyComponents/PharmacyHeader';
import PharmacySearch from '../../components/pharmacyComponents/PharmacySearch';
import PharmacyItem from '../../components/pharmacyComponents/PharmacyItem';

const pharmacyData = [
  {
    id: 1,
    image: require('../../assets/images/biotin.jpeg'),
  },
  {
    id: 2,
    image: require('../../assets/images/pharmacy2.png'),
  },
  {
    id: 3,
    image: require('../../assets/images/pharmacy3.png'),
  },
  {
    id: 4,
    image: require('../../assets/images/pharmacy1.png'),
  },
];

export default function Pharmacy({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(31, 151, 208, 0.3)',
      }}>
      <PharmacyHeader />
      <PharmacySearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        {pharmacyData.map(item => (
          <PharmacyItem
            image={item.image}
            key={item.id}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}
