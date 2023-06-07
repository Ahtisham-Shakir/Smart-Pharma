import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import PharmacyHeader from '../../components/pharmacyComponents/PharmacyHeader';
import PharmacySearch from '../../components/pharmacyComponents/PharmacySearch';
import PharmacyItem from '../../components/pharmacyComponents/PharmacyItem';

const pharmacyData = [
  {
    title: 'Biotin',
    id: 1,
    image: require('../../assets/images/biotin.jpeg'),
    price: 500,
  },
  {
    title: 'Vitamin C',
    id: 2,
    image: require('../../assets/images/pharmacy2.png'),
    price: 150,
  },
  {
    title: 'Vitamin D',
    id: 3,
    image: require('../../assets/images/pharmacy3.png'),
    price: 100,
  },
  {
    title: 'Vitamin E',
    id: 4,
    image: require('../../assets/images/pharmacy1.png'),
    price: 200,
  },
];

export default function Pharmacy({navigation}) {
  const [search, setSearch] = useState('');
  const filteredData = pharmacyData.filter(item =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(31, 151, 208, 0.3)',
      }}>
      <PharmacyHeader />
      <PharmacySearch search={search} setSearch={setSearch} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredData.map(item => (
          <PharmacyItem
            image={item.image}
            price={item.price}
            key={item.id}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}
