import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const listData = [
  {
    text: '24/7 working under supervision of qualified pharmacists.',
  },
  {
    text: 'Inventory and expiry management',
  },
  {
    text: 'Patients counselling education',
  },
];

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      {listData.map((item, index) => (
        <ListItem key={index} text={item.text} index={index + 1} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },
  listContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingVertical: 15,
  },
  index: {
    fontSize: 15,
    color: '#1F97D0',
    fontWeight: '500',
  },
  listText: {
    fontSize: 15,
    color: '#677294',
    fontWeight: '500',
  },
});

const ListItem = ({index, text}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.index}>{index}. &nbsp;</Text>
      <Text style={styles.listText}>{text}</Text>
    </View>
  );
};
