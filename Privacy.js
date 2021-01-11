import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Button, Image, View, Text, Platform } from 'react-native';
import movieTrailer from 'movie-trailer'
import { Constants } from 'expo'
import WebView from 'react-native-webview'

function PrivacyPolicyScreen({route, navigation}) {

    console.log('Entered PrivacyPolicyScreen')
  
    return (
        


        <WebView style={styles.WebViewContainer}
            javaScriptEnabled={true}
            source={{uri: 'https://privacy.globalstripe.com/privacy/policy.html'}}
        >
        </WebView>


  
      
    );
  }

  export default PrivacyPolicyScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    WebViewContainer: {
      
        marginTop: (Platform.OS == 'android') ? 10 : 20,   
        backgroundColor: '#0f0',
        color: '#fea'
      },
    poster: {
        backgroundColor: '#000',
        flex: 1,
        marginTop: 525,
        marginLeft: 1,

      },
    tinyLogo: {
        width: 50,
        height: 50,
      },
   logo: {
        marginLeft: 1,
        width: 196,
        height: 98,
      },
    title: {
        //fontFamily: 'Roboto-Black',  <-- External font 
        // List of all internal ios fonts for react-native  
        // https://github.com/react-native-training/react-native-fonts/blob/master/IosFonts.js
        position: 'absolute',
        fontFamily: 'Verdana-Bold',
        fontSize: 22,
        marginLeft: 10,
        padding: 0,
        marginTop: 25,
        marginBottom: 1,
        color: 'white',
        zIndex: 2 
    },
    overview: {
        //fontFamily: 'Roboto-Black',  <-- External font 
        // List of all internal ios fonts for react-native  
        // https://github.com/react-native-training/react-native-fonts/blob/master/IosFonts.js
        position: 'absolute',
        fontFamily: 'Verdana-Bold',
        fontSize: 14,
        marginLeft: 10,
        padding: 0,
        marginTop: 600,
        marginBottom: 15,
        color: 'white',
    },
    id: {
        //fontFamily: 'Roboto-Black',  <-- External font 
        // List of all internal ios fonts for react-native  
        // https://github.com/react-native-training/react-native-fonts/blob/master/IosFonts.js
        position: 'absolute',
        fontFamily: 'Verdana-Bold',
        fontSize: 22,   
        marginLeft: 10,
        padding: 0,
        marginTop: 175,
        marginBottom: 15,
        color: 'white',

    },
    safestyle: {
        flex: 1,
        backgroundColor: '#fff',
      },
      button2: {
          fontFamily: 'Verdana-Bold',
          position: 'absolute',
          fontSize: 36,
          marginLeft: 10,
          padding: 0,
          marginTop: 525,
          marginBottom: 15,
          color: 'white',
  
      },
  });


