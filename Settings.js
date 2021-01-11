import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import {TouchableOpacity, ScrollView, Dimensions, NativeModules, SafeAreaView, StyleSheet, Image, Button, Text, View } from 'react-native';
import PrivacyPolicyScreen from './Privacy'

import * as Device from 'expo-device';
import { Gyroscope } from 'expo-sensors';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const DeviceInfo = NativeModules.DeviceInfo;

// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions'

// From here https://docs.expo.io/versions/latest/sdk/device/
const dbrand = Device.brand;
const dmodelName = Device.modelName
const dTotalMemory = Device.totalMemory
const dOSInfo = Device.osName + ' ' + Device.osVersion
const dName = Device.deviceName
const mett = Gyroscope

console.log("Device Brand: " + dbrand)

// console.log(DeviceInfo)

console.log('Landing Page Loaded:')
console.log('Device Width: ', deviceWidth)
console.log('Device Height: ', deviceHeight)

const Settings = ({ navigation }) => {

console.log("Device Brand: " + dbrand)
const [DeviceBrand, setBrand] = useState(dbrand)

const [data, setData] = useState({
  x: 0,
  y: 0,
  z: 0,
});

const [subscription, setSubscription] = useState(null);

const _slow = () => {
  Gyroscope.setUpdateInterval(2000);
};

const _fast = () => {
  Gyroscope.setUpdateInterval(160);
};

const _subscribe = () => {
  alert("Toggled on");
 // setSubscription(
 //   Gyroscope.addListener(gyroscopeData => {
 //     setData(gyroscopeData);
 //   })
   
  //);
};

const _unsubscribe = () => {
  alert("Toggled on");
  subscription && subscription.remove();
  setSubscription(null);
};

useEffect(() => {
  _subscribe();
  return () => _unsubscribe();
}, []);

const { x, y, z } = data;

  return (

  <SafeAreaView style={styles.container}>

  <ScrollView>
        <View style={styles.title}>
          <Text>{"\n"}Profile Name:</Text>
          <Text>{"\n"}Age:</Text>
          <Text>{"\n"}Gender:</Text>
          <Text>{"\n"}Account Type: VIP</Text>
          <Text>{"\n"}UUID:</Text>
          <Text>{"\n"}Device Info: </Text>
          <Text>{"\n"}Device Name: {dName}</Text>
          <Text>{"\n"}App Version: v1.1.2</Text>
          <Text>{"\n"}Brand: {DeviceBrand} {dmodelName}</Text>
          <Text>{"\n"}OS: {dOSInfo}</Text>
          <Text>{"\n"}Memory: {dTotalMemory / 1024 / 1024}</Text>
          <Text>{"\n"}Screen: {deviceWidth} x {deviceHeight}</Text>
          <PrivacyPolicyScreen></PrivacyPolicyScreen>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Gyroscope:{"\n"}</Text>
          <Text style={styles.text}>
            x: {round(x)} {"\n"}y: {round(y)} {"\n"}z:{round(z)}{"\n\n"}
          </Text>

          <View style={styles.buttonContainer}>

            <TouchableOpacity onPress={_slow} style={[styles.button, styles.roundButton1]}>
              <Text>{"\n"}Slow</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.roundButton1}>
              <Text>{subscription ? 'On' : 'Off'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_fast} style={styles.roundButton1}>
              <Text>{"\n"}Fast</Text>
            </TouchableOpacity>

          </View>

    </View>

    </ScrollView>
    </SafeAreaView>

  );
};

export default Settings;


function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',      backgroundColor: '#fff',

    },
    image: {
      flex: 1,
      resizeMode: 'contain',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      marginTop: 1,
      width: 424,
      height: 256,
      alignItems: 'stretch',
      },
 logo: {
      marginLeft: 1,
      width: 196,
      height: 98,
    },
    title: {
      fontFamily: 'Verdana',
        fontSize: 18,
        backgroundColor: '#fff',
        // width: 400,
        // height: 120,
        marginLeft: 10,
        marginRight: 0,
        padding: 0,
        marginTop: 0,
        marginBottom: 1,
        color: '#000',
    },
    text: {
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 10,
    },
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
    },
    roundButton1: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'orange',
    },
    roundButton2: {
      marginTop: 20,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#ccc',
    },
});
