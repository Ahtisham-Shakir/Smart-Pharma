import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import PharmacyHeader from '../../components/pharmacyComponents/PharmacyHeader';
import PharmacySearch from '../../components/pharmacyComponents/PharmacySearch';
import PharmacyItem from '../../components/pharmacyComponents/PharmacyItem';

import {pharmacyData} from './pharmacyData';

export default function Pharmacy({navigation}) {
  const [search, setSearch] = useState('');

  // filter data based on search
  const filteredData = pharmacyData.filter(item =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(31, 151, 208, 0.3)',
      }}>
      <PharmacyHeader navigation={navigation} />
      <PharmacySearch search={search} setSearch={setSearch} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredData.map(item => (
          <PharmacyItem item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
}
