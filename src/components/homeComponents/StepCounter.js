import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

//images
import exercise from '../../assets/images/exercise.png';
import todaySteps from '../../assets/images/todaySteps.png';
import circle from '../../assets/images/circle.png';

export default function StepCounter() {
  return (
    <View style={styles.stepCounterContainer}>
      <Text style={styles.heading}>Step Taken</Text>
      <View style={{alignItems: 'center', marginVertical: 15}}>
        <ImageBackground
          source={circle}
          style={styles.circleImg}
          resizeMode="cover">
          <Image source={exercise} />
          <Image source={todaySteps} />
        </ImageBackground>
      </View>

      <Text style={styles.steps}>1248 Total Steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stepCounterContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 10,
    marginRight: 10,
  },
  heading: {
    color: '#264653',
    fontSize: 18,
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
  },
  steps: {
    color: '#264653',
    fontSize: 17,
  },
  circleImg: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
