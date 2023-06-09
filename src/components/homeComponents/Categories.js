import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

// images
import heart from '../../assets/images/heart.png';
import brain from '../../assets/images/brain.png';
import teeth from '../../assets/images/teeth.png';
import lungs from '../../assets/images/lungs.png';
import pink from '../../assets/images/pink.png';
import skyblue from '../../assets/images/skyblue.png';
import purple from '../../assets/images/purple.png';
import blue from '../../assets/images/blue.png';

export default function Categories({navigation}) {
  return (
    <>
      <View style={styles.categoriesContainer}>
        <Text style={styles.title}>Categories</Text>
        {/* <Text styles={{color: 'black'}}>View all</Text> */}
      </View>
      <View>
        <ScrollView
          horizontal
          style={{paddingHorizontal: 19}}
          showsHorizontalScrollIndicator={false}>
          <Category
            text="Medical Equipment"
            image={heart}
            background={pink}
            navigation={navigation}
            showText="Cadiological"
          />
          <Category
            text="Laboratory"
            image={brain}
            background={skyblue}
            navigation={navigation}
            showText="Neurological"
          />
          <Category
            text="Medical insurance"
            image={teeth}
            background={blue}
            navigation={navigation}
            showText="Dental"
          />
          <Category
            text="Doctor Appointment"
            image={lungs}
            background={purple}
            navigation={navigation}
            showText="Respiratory"
          />
          {/* <Category
            text="Pharmacy"
            image={heart}
            background={pink}
            navigation={navigation}
            showText="Cardiological"
          />
          <Category
            text="Home Nursing"
            image={brain}
            background={skyblue}
            navigation={navigation}
            showText="Neurological"
          />
          <Category
            text="Medical Media"
            image={teeth}
            background={blue}
            navigation={navigation}
            showText="Dental"
          /> */}
        </ScrollView>
      </View>
    </>
  );
}

const Category = ({text, background, image, navigation, showText}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Pharmacy', {name: text})}>
      <View style={styles.category}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Image source={image} />
        </ImageBackground>
        <Text style={styles.categoryName}>{showText}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 19,
  },
  title: {
    color: '#02100F',
    fontSize: 14,
    fontWeight: '500',
  },
  btn: {
    color: '#02100F',
    fontSize: 12,
    fontWeight: '500',
  },
  category: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    width: 83,
    marginRight: 15,
  },
  backgroundImage: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 9,
    lineHeight: 11,
    color: 'black',
  },
});
