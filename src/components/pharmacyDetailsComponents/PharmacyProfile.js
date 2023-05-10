import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// import Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// image import
import image from '../../assets/images/pharmacy1.png';

export default function PharmacyProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={image} />
        <View style={styles.info}>
          <Text style={styles.title}>Astra Pharma</Text>
          <Text style={styles.location}>Street Burh kaif Near Dubai Mall</Text>
          <Text style={styles.reviews}>
            <Ionicons name="star" color="#F6D060" size={13} />
            <Ionicons name="star" color="#F6D060" size={13} />
            <Ionicons name="star" color="#F6D060" size={13} />
            <Ionicons name="star" color="#F6D060" size={13} />
            <Ionicons name="star" size={13} />
            427 Reviews
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <ChatButtons name="call" />
        <ChatButtons name="chatbubbles-outline" />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Order Medicine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 17,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },
  info: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#021638',
  },
  location: {
    marginVertical: 6,
    fontSize: 14,
  },
  reviews: {
    fontSize: 11,
    color: '#677294',
  },
  btn: {
    backgroundColor: '#64DC97',
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

const ChatButtons = ({name}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: name === 'call' ? '#45B5E5' : '#E58245',
        padding: 12,
        borderRadius: 10,
        marginRight: 5,
      }}>
      <Ionicons name={name} size={20} color="#fff" />
    </TouchableOpacity>
  );
};
