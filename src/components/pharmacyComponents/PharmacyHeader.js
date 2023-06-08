import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Image,
  Button,
} from 'react-native';

import {useGlobalState} from '../../context/userContext';

import MaterialIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PharmacyHeader({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const {cart, setCart} = useGlobalState();

  const placeOrder = () => {
    alert('Order Placed');
    setCart([]);
    setModalVisible(false);
  };

  return (
    <View style={styles.HeaderConatainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.icon}>
            <MaterialIcons
              name="chevron-thin-left"
              size={14}
              color={'#677294'}
            />
          </View>
          <Text style={styles.title}>Pharmacy</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={{position: 'relative'}}>
          <MaterialCommunityIcons name="cart-outline" size={34} />
          {cart?.length > 0 && <Text style={styles.cart}>{cart?.length}</Text>}
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <View style={{paddingHorizontal: 10}}>
          <Pressable onPress={() => setModalVisible(false)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <View
                style={[
                  styles.icon,
                  {backgroundColor: 'rgba(31, 151, 208, 0.3)'},
                ]}>
                <MaterialIcons
                  name="chevron-thin-left"
                  size={14}
                  color={'#677294'}
                />
              </View>
              <Text style={styles.title}>Cart</Text>
            </View>
          </Pressable>
          {cart?.length > 0 ? (
            cart.map(item => (
              <View key={item.id} style={styles.cartItemContainer}>
                <Image source={item.image} style={styles.cartItemImage} />
                <Text style={styles.cartItemTitle}>{item.title}</Text>
                <Text style={styles.cartItemPrice}>{item.price}</Text>
              </View>
            ))
          ) : (
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
              Cart is empty
            </Text>
          )}
          {cart?.length > 0 && (
            <>
              <View>
                <Text style={styles.cartItemTotal}>
                  Total: {cart?.reduce((acc, item) => acc + item.price, 0)}
                </Text>
              </View>
              <Button title="Place Order" onPress={placeOrder} />
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 37,
    justifyContent: 'space-between',
    paddingRight: 19,
  },
  icon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 19,
  },
  title: {
    fontSize: 18,
    color: '#264653',
    fontWeight: '700',
  },
  cart: {
    position: 'absolute',
    right: 0,
    top: -10,
    backgroundColor: 'purple',
    borderRadius: 999,
    height: 20,
    width: 20,
    color: '#fff',
    textAlign: 'center',
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 10,
  },
  cartItemImage: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: '700',
  },
  cartItemTotal: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
