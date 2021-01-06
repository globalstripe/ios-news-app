import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import {ScrollView, SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';
import {ScrollView, Dimensions, NativeModules, SafeAreaView, StyleSheet, Image, Button, Text, View } from 'react-native';

//import NativeAdView, {AdManager, CallToActionView,IconView,HeadlineView,TaglineView, 
 //                      AdvertiserView,AdBadge,} 
//from "react-native-admob-native-ads";

//import {MyAds, GlobalStripeAds} from './Admodule'

import MyCarousel from './carousel'

import Row from './row'
import requests from './requests.js'

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const DeviceInfo = NativeModules.DeviceInfo;

// console.log(DeviceInfo)

console.log('Landing Page Loaded:')
console.log('Device Width: ', deviceWidth)
console.log('Device Height: ', deviceHeight)

const Landing = ({ navigation }) => {

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
  
  //AdManager.setRequestConfiguration(config);

  //AdManager.isTestDevice().then((result) => console.log("Is Test Device?", result));
  
  return (

      <SafeAreaView style={styles.container}>

        {/* <Text style={styles.text}>TOP HERE - FOLLOWED BY NATIVE VIDEO</Text>
        <Text style={styles.text}>OKEY DOKEY</Text>
        <Text style={styles.text}>Carousel</Text>
       */}

       <Image
       style={styles.header_logo}
       source={require('./assets/images/ChrisFlix2.png')}
       ></Image>

      <ScrollView>
      <MyCarousel></MyCarousel>
      <View style={{flex: 1,}}>
   
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetFlixOriginals} nav={navigation}  />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} nav={navigation}  />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} nav={navigation} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} nav={navigation} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} nav={navigation} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies}  nav={navigation} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} nav={navigation} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} nav={navigation} />

      {/* <GlobalStripeAds></GlobalStripeAds> */}
      {/* <MyAds></MyAds> */}


    </View>

    </ScrollView>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>

  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customfont: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
    backgroundColor: '#000',
    color: '#fff'
},
  safestyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
    backgroundColor: '#000',
    color: '#fff'
  },

  header_logo: {
    width: (deviceWidth * 0.80),
    height: 98,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    backgroundColor: '#000',
  },
});
