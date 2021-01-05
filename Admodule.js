import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

import NativeAdView, {AdManager, CallToActionView,IconView,HeadlineView,TaglineView, 
                       AdvertiserView,AdBadge,} 
from "react-native-admob-native-ads";

const myAdUinitID = 'ca-app-pub-2524089956888163/9288094240';
const myNativeAd = 'ca-app-pub-2524089956888163/9298335557';
const MyVideoAds = 'ca-app-pub-2524089956888163/2770362324';
const GoogleTestAdUnit = 'ca-app-pub-3940256099942544/2934735716';
const anotherTestAdUnit = 'ca-app-pub-3940256099942544/2247696110'

function MyAds() {

    return (

    <View>
        <Text>M</Text>
   
    <NativeAdView style={{width: "95%",alignSelf: "center",height: 100,}}
        adUnitID="ca-app-pub-3940256099942544/2247696110">

        {/* This view wraps the entire ad - the closing tag is at the end of the whole block */}
        <View style={{height: 100, width: "100%",}}>
          {/* AdBadge is the little "Ad" logo a the beginnind of the block */}
          <AdBadge/>
   

          {/* View of the Ad/Brands Icon/Logo */}
          {/* This view also wraps the entire ad and closes at the end */}
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
      </View> 
    )
} 



function GlobalStripeAds() {

    return (

        <View>
        <Text>G</Text>

    <NativeAdView style={{width: "95%",alignSelf: "center",height: 100,}}
        adUnitID="'ca-app-pub-2524089956888163/2770362324">

        {/* This view wraps the entire ad - the closing tag is at the end of the whole block */}
        <View style={{height: 100, width: "100%",}}>
          {/* AdBadge is the little "Ad" logo a the beginnind of the block */}
          <AdBadge/>
   

          {/* View of the Ad/Brands Icon/Logo */}
          {/* This view also wraps the entire ad and closes at the end */}
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
      </View>
    )
} 

// Export Multiple Functions

export {MyAds, GlobalStripeAds}

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