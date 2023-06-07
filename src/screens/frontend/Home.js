import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Appointments from '../../components/homeComponents/Appointments';
import Categories from '../../components/homeComponents/Categories';
import CovidPrecautions from '../../components/homeComponents/CovidPrecautions';
import CovidTest from '../../components/homeComponents/CovidTest';
import Help from '../../components/homeComponents/Help';
import HomeHeader from '../../components/homeComponents/HomeHeader';
import SearchBox from '../../components/homeComponents/SearchBox';
import StepCounter from '../../components/homeComponents/StepCounter';
import Symptoms from '../../components/homeComponents/Symptoms';

export default function Home({navigation}) {
  return (
    <View style={{backgroundColor: '#E5E5E5', flex: 1}}>
      <ScrollView>
        <HomeHeader />
        <SearchBox />
        <Help />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 13,
            justifyContent: 'space-between',
            marginTop: 29,
          }}>
          <StepCounter />
          <Appointments />
        </View>
        <Categories navigation={navigation} />
        <Symptoms navigation={navigation} />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 13,
            justifyContent: 'space-between',
            marginVertical: 22,
          }}>
          <CovidTest />
          <CovidPrecautions />
        </View>
      </ScrollView>
    </View>
  );
}
