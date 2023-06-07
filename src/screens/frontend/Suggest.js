import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import doctor from '../../assets/images/doctor.png';

const Suggest = ({navigation, route}) => {
  const [symptoms, setSymptoms] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  if (route?.params?.name) {
    const name = route.params.name;
    // setSymptoms(route.params.name);
    // getResults();
  }

  const getResults = async () => {
    if (!symptoms) return alert('Please enter symptoms');
    try {
      setLoading(true);
      const response = await fetch('http://10.0.2.2:3001/semanticsearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({symptoms}),
      });
      const data = await response.json();
      console.log('data', data);
      setResults(data?.results.slice(0, 5));
      setLoading(false);
      setSymptoms('');
    } catch (error) {
      console.log('error', error);
      alert('Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Image source={doctor} />
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>
          Note it's just a prototype, This may lead to false results, Please
          consult to your doctors!
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Symptom"
            value={symptoms}
            onChangeText={newValue => setSymptoms(newValue)}
          />
          <Button title="Submit" onPress={getResults} disabled={false} />
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView style={{paddingHorizontal: 15}}>
            <Text style={styles.title}>Possible Diseases</Text>
            {results?.length ? (
              results.map(re => <Text>{`\u2022 ${re}`}</Text>)
            ) : (
              <Text>No Results</Text>
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F97D0',
  },
  firstContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  secondContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 2,
  },
});
