import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import { fetchPost, fetchGet } from '../index';
import { WebView } from 'react-native-webview';



const  base_link = 'https://dit44uotqb.execute-api.ap-south-1.amazonaws.com/default/article';

const App = ({ navigation, route}) => {
  const { link } = route.params;

  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    const fetch = async ()=> {

       console.log("link "+ link);

      const postData = { end_url : link };
 
      const res = await fetchPost({ base_url : base_link,  data: postData } );

      setHtmlData(res);
    }
    fetch();
  }, [link]);

  return (
    <View style={styles.container}>
    <View style={styles.htmlContainer} >
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlData }}
        style={styles.htmlContent}
        javaScriptEnabled={false} // Disable JavaScript to prevent any interactions
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  htmlContainer: {
    height: '100%',
    width: '100%',

  },
  
  htmlContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: 'blue',
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;