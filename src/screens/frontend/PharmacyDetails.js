import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import DetailsHeader from '../../components/pharmacyDetailsComponents/DetailsHeader';
import PharmacyProfile from '../../components/pharmacyDetailsComponents/PharmacyProfile';
import PharmacyRatings from '../../components/pharmacyDetailsComponents/PharmacyRatings';
import PharmacyLocation from '../../components/pharmacyDetailsComponents/PharmacyLocation';
import Services from '../../components/pharmacyDetailsComponents/Services';

export default function PharmacyDetails() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(31, 151, 208, 0.3)'}}>
      <ScrollView>
        <DetailsHeader />
        <PharmacyProfile />
        <PharmacyRatings />
        <Services />
        <PharmacyLocation />
      </ScrollView>
    </View>
  );
}
