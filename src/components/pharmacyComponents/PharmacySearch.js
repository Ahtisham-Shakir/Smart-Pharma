import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function PharmacySearch({search, setSearch}) {
  return (
    <View style={styles.searchContainer}>
      <EvilIcons name="search" size={24} color="#677294" />
      <TextInput
        placeholderTextColor="black"
        style={styles.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={newText => setSearch(newText)}
      />
      <EvilIcons name="close" size={24} color="#677294" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    color: '#677294',
    fontSize: 15,
    placeholderTextColor: 'black',
  },
});
