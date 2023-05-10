import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

//Icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SearchBox() {
  return (
    <View style={styles.searchBoxContainer}>
      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={24} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.filter}>
        <FontAwesome5 name="filter" size={15} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBoxContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    paddingRight: 25,
    height: 44,
    width: '100%',
  },
  filter: {
    backgroundColor: '#fff',
    height: 44,
    width: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
