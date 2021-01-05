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


        <Text>TOP HERE - FOLLOWED BY NATIVE VIDEO</Text>
        <Text>OKEY DOKEY</Text>

        <Text>Carousel</Text>

        <ScrollView>

        <MyCarousel></MyCarousel>

          <View style={{flex: 1,}}>
   
 
        <NativeAdView style={{width: "95%",alignSelf: "center",height: 100,}}
        adUnitID="ca-app-pub-2524089956888163/9288094240">

        <View style={{height: 100, width: "100%",}}>
         
          <AdBadge/>
          <View style={{height: 100,width: "100%",flexDirection: "row",
              justifyContent: "flex-start",alignItems: "center",paddingHorizontal: 10,}} >

           <IconView style={{ width: 60, height: 60, }} />
            <View style={{width: "65%",maxWidth: "65%", paddingHorizontal: 6,}} >
                <HeadlineView style={{ fontWeight: "bold", fontSize: 13,}} />
                <TaglineView numberOfLines={5} style={{ fontSize: 11, }} />
                <AdvertiserView style={{fontSize: 10, color: "gray",}}/>
            </View>
 
            <CallToActionView style={{height: 45,paddingHorizontal: 12,
                backgroundColor: "purple",justifyContent: "center",
                alignItems: "center",borderRadius: 5,elevation: 10,}} 
                textStyle={{ color: "white", fontSize: 14 }} />
          </View>
        </View>
      </NativeAdView>
   
      <GlobalStripeAds></GlobalStripeAds>
      <MyAds></MyAds>
      <GlobalStripeAds></GlobalStripeAds>
      <MyAds></MyAds>
      
      <Row title="NetFlix Movies" fetchUrl={requests.fetchNetFlixOriginals}></Row>


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safestyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
