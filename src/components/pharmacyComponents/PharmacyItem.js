import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {useGlobalState} from '../../context/userContext';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function PharmacyItem({item}) {
  const {addToCart} = useGlobalState();
  return (
    <View style={styles.pharmacyContainer}>
      <AntDesign name="hearto" size={18} style={styles.Icon} />
      <View style={styles.pharmacyHeader}>
        <Image style={styles.pharmacyImage} source={item?.image} />
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.reviews}>
            <AntDesign name="star" color="#FFA41B" size={9} /> 5.0 (125 reviews)
          </Text>
          <Text style={styles.location}>203 Near Dubai Mall</Text>
          <Text style={styles.orders}>
            <MaterialIcon name="stop-circle" color="#64DC97" size={9} /> 87%
            Order Completion
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Available</Text>
          <Text style={styles.footerPrice}>RS {item?.price}</Text>
        </View>
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => addToCart(item)}>
          <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pharmacyContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 17,
    marginBottom: 10,
  },
  Icon: {
    position: 'absolute',
    right: 17,
    top: 22,
  },
  pharmacyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pharmacyImage: {
    marginRight: 14,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: '#264653',
  },
  reviews: {
    fontSize: 9,
    fontWeight: '500',
    color: '#1F97D0',
  },
  location: {
    fontSize: 12,
    color: '#677294',
    marginVertical: 5,
  },
  orders: {
    fontSize: 11,
    color: '#677294',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
    paddingHorizontal: 10,
  },
  footerText: {
    fontSize: 13,
    color: '#64DC97',
    fontWeight: '500',
  },
  footerPrice: {
    fontSize: 14,
    color: '#677294',
  },
  footerBtn: {
    backgroundColor: '#64DC97',
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 4,
  },
});
