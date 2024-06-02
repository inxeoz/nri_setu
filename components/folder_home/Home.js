import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { images, doodleImage } from '../index';
import SvgUri from 'react-native-svg-uri';
import { Ionicons, Octicons } from '@expo/vector-icons';

const ASPECT_RATIO = 16 / 10; // Aspect ratio for the cards
const MIN_COLUMNS = 2; // Minimum number of columns

export default function HOME({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="settings"
          size={24}
          color="black"
          style={{ marginRight: 30 }}
          onPress={async () => {
            await navigation.navigate('Settings');
          }}
        />
      ),
    });
  }, [navigation]);

  const colors = [
    '#ff7675',
    '#74b9ff',
    '#55efc4',
    '#ffeaa7',
    '#a29bfe',
    '#fd79a8',
    '#00b894',
    '#ffeaa7',
    '#6c5ce7',
    '#fab1a0',
  ];

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View
        style={[styles.canvas, { width: windowWidth, height: canvasHeight }]}>
        <ScrollView horizontal={true}>
          {Object.keys(images).map((key, index) => (
            <Image
              key={index}
              style={styles.canvasImage}
              source={{ uri: images[key] }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        {Object.keys(doodleImage).map((key, index) => (
          <View
            key={key}
            style={[
              styles.card,
              {
                backgroundColor: colors[index % colors.length],
                width: cardWidth,
                height: cardHeight,
              },
            ]}>
            <SvgUri
              height={100}
              width={100}
              source={doodleImage[key] }
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const CARD_MARGIN = 10;
const CARD_COLUMNS = Math.max(Math.floor(windowWidth / 250), MIN_COLUMNS); // Adjust card width as needed
const cardWidth =
  (windowWidth - CARD_MARGIN * (CARD_COLUMNS + 1)) / CARD_COLUMNS;
const cardHeight = cardWidth / ASPECT_RATIO;

const canvasHeight = cardHeight * 2;
const styles = StyleSheet.create({
  canvasImage: {
    width: windowWidth,
    height: canvasHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  main: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  canvas: {
    backgroundColor: '#fd79a8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
