// CarouselComponent.js
import {View, Image, TouchableOpacity} from 'react-native';

import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

export default function CarouselComponent() {
  const navigation = useNavigation();

  const data = [
    {image: require('../../assets/images/acidity.png'), screen: 'Screen1'},
    // {image: require('./assets/image2.jpg'), screen: 'Screen2'},
    // {image: require('./assets/image3.jpg'), screen: 'Screen3'},
    // {image: require('./assets/image4.jpg'), screen: 'Screen4'},
    // {image: require('./assets/image5.jpg'), screen: 'Screen5'},
  ];

  const handlePress = screen => {
    navigation.navigate(screen);
  };

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => handlePress(item.screen)}>
        <Image source={item.image} style={{width: 300, height: 300}} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
}
