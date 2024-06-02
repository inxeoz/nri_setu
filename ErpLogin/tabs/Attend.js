import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { fetchData } from '../index';

const colors = [
  '#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe',
  '#fd79a8', '#00b894', '#ffeaa7', '#6c5ce7', '#fab1a0',
];

const base_url = 'https://w4bg0ee1f8.execute-api.ap-south-1.amazonaws.com/default/attend';

const Component = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(base_url);
  const [loadingComplete, setLoadingComplete] = useState(false);


  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(url);
      setData(JSON.parse(res));
      setLoadingComplete(true);
      console.log(res);
    };
    getData();
  }, [url]);

  return (
    <ScrollView>
      <View style={styles.main}>
        {!loadingComplete ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((semesterData, semesterIndex) =>
            semesterData.map((rowData, rowIndex) => (
              <View
                key={`${semesterIndex}-${rowIndex}`}
                style={[
                  styles.card,
                  { backgroundColor: colors[rowIndex % colors.length] },
                ]}
              >
                <Text>{JSON.stringify(rowData)}</Text>
              </View>
            ))
          )
        )}
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const CARD_MARGIN = 15;
const CARD_COLUMNS = 2;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: CARD_MARGIN,
  },
  card: {
    width: (windowWidth - CARD_MARGIN * (CARD_COLUMNS + 1)) / CARD_COLUMNS,
    height: 140,
    marginBottom: CARD_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Component;
