import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchabelIcon} from '../components/TouchabelIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    console.log('tab1 screen');
  }, []);
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      {/* <Text style={styles.title}>Tab1Screen</Text> */}
      <Text>
        <TouchabelIcon iconName="airplane-outline" />
        <TouchabelIcon iconName="american-football-outline" />
        <TouchabelIcon iconName="body-outline" />
        <TouchabelIcon iconName="beaker-outline" />
        <TouchabelIcon iconName="leaf-outline" />
        <TouchabelIcon iconName="calculator-outline" />
        <TouchabelIcon iconName="images-outline" />
        <TouchabelIcon iconName="attach-outline" />
      </Text>
    </View>
  );
};
