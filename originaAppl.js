import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {AdMobBanner} from 'react-native-admob';

import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
} from "react-native-admob-native-ads";


const App = () => {
  const onFailToRecieveAd = (error) => console.log(error);
  const myAdUinitID = 'ca-app-pub-2524089956888163/9288094240';
  const GoogleTestAdUnit = 'ca-app-pub-3940256099942544/2934735716';

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>.</Text>
          <Text>AdMob Demo</Text>
          <Text>--------------</Text>
          <Text>.</Text>
          <Text>.</Text>
        <AdMobBanner
          adSize="largeBanner"
          adUnitID='ca-app-pub-2524089956888163/9288094240'
          testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />
        <Text>.</Text>
        <Text>--------------</Text><Text>.</Text>
        <Text>And some stuff after the Display Ad!</Text>
        <Text>.</Text>
        <Text>And Another Ad!</Text>
        <Text>--------------</Text><Text>.</Text>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
          testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />
         <Text>.</Text>
        <Text>SmartBanner Portrait</Text>
        <Text>--------------</Text><Text>.</Text>
        <AdMobBanner
          adSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
          testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />

<Text>.</Text>
        <Text>SmartBanner LandScape</Text>
        <Text>--------------</Text><Text>.</Text>
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID='ca-app-pub-2524089956888163/9288094240'
          testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />

<Text>.</Text>
        <Text>mediumRectangle</Text>
        <Text>--------------</Text><Text>.</Text>
        <AdMobBanner
          adSize="mediumRectangle"
          adUnitID='ca-app-pub-2524089956888163/9288094240'
          testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />
    </View>


      </SafeAreaView>
    </>
  );
};

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
