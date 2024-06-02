import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import { state } from '../index';

const App = ({ navigation }) => {
  const [cookiesLoaded, setCookiesLoaded] = useState(false);
  const [cookieToFetch, setCookieToFetch] = useState('');
  const [dataFetched, setDataFetched] = useState(false);

  const feesUrl =
    'https://w4bg0ee1f8.execute-api.ap-south-1.amazonaws.com/default/fees';

  useEffect(() => {
    console.log(`${state.verified} cookie verified ?`);
    console.log(state.cookies);
    setCookieToFetch(state.cookies);
    setCookiesLoaded(true);

    // Simulate fetching additional data (or you can use a real fetch request)
    const fetchData = async () => {
      // Simulating data fetch with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual data fetching logic
      setDataFetched(true);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {!cookiesLoaded || !dataFetched ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.body}>
          <WebView
            source={{
              uri: feesUrl,
            }}
            headers={{
              Cookie: cookieToFetch,
            }}
            allowUniversalAccessFromFileURLs={true}
            javaScriptEnabled={true}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
