import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Main from './Main';

import ArticlesHome from './components/ArticleHome'
 function App({route}) {
    const { url1, url2 } = route.params;
  return (
  <Main url1={url1} url2={url2}/>
  );
}


export default App;