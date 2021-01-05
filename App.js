import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import NativeAdView, {AdManager, CallToActionView,IconView,HeadlineView,TaglineView, 
                       AdvertiserView,AdBadge,} 
from "react-native-admob-native-ads";

import {MyAds, GlobalStripeAds} from './Admodule'
import MyCarousel from './carousel'

import Row from './row'
import requests from './requests.js'

const App = ({ navigation }) => {

  const onFailToRecieveAd = (error) => console.log(error);
  const myAdUinitID = 'ca-app-pub-2524089956888163/9288094240';
  const myNativeAd = 'ca-app-pub-2524089956888163/9298335557';
  const GoogleTestAdUnit = 'ca-app-pub-3940256099942544/2934735716';
  const anotherTestAdUnit = 'ca-app-pub-3940256099942544/2247696110'

  const config = {
    //testDeviceIds: ["YOUR_TEST_DEVICE_ID"],
    maxAdContetRating: "MA",
    tagForChildDirectedTreatment: false,
    tagForUnderAgeConsent: false,
  };
  
  AdManager.setRequestConfiguration(config);

  AdManager.isTestDevice().then((result) => console.log("Is Test Device?", result));
  
  return (
    <>

      <SafeAreaView style={styles.container}>


        <Text style={styles.text}>TOP HERE - FOLLOWED BY NATIVE VIDEO</Text>
        <Text style={styles.text}>OKEY DOKEY</Text>

        <Text style={styles.text}>Carousel</Text>

        <ScrollView>

        <MyCarousel></MyCarousel>

          <View style={{flex: 1,}}>
   

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetFlixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

      <GlobalStripeAds></GlobalStripeAds>
      <MyAds></MyAds>


    </View>

    </ScrollView>

    </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safestyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    backgroundColor: '#000',
    color: '#fff'
  },
});
