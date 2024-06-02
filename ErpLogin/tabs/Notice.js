import React, { useState, useEffect } from 'react';
import {
  FlatList,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  View
} from 'react-native';
import { fetchData } from '../index';

import NoticeUnit from './NoticeUnit';

const base_url =
  'https://w4bg0ee1f8.execute-api.ap-south-1.amazonaws.com/default/notice';
const CircularNotice = ({ navigation, notices }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [parsedNotices, setParsedNotices] = useState([]);

  useEffect(() => {
    const get = async () => {
      console.log('notices found');
      const res = await fetchData(base_url);
      const noticesData = await JSON.parse(res.trim());
      setParsedNotices(noticesData.slice(2));
      setLoadingComplete(true);
      setFilteredNotices(noticesData.slice(2));
      console.log(noticesData);
    };
    get();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = parsedNotices.filter(
      (elements) =>
        elements.notice.toLowerCase().includes(text.toLowerCase()) ||
        elements.date.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNotices(filtered);
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search notices"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <ScrollView>
        {!loadingComplete ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={filteredNotices}
            renderItem={({ item }) => <NoticeUnit notice={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default CircularNotice;
