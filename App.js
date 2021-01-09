// In App.js in a new project

import * as React from 'react';
import { TouchableOpacity, Button, StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing'
import Guardian from './data-api'
import API from './mediastack-news-data-api'
import DetailsScreen from './Details'
import WebView from 'react-native-webview'

function HomeScreen({ navigation }) {
  
    return (
        
      <View style={{ flex: 1 }}>
        <WebView
                    style={ styles.WebViewContainer }
                    //javaScriptEnabled={true}
                    //domStorageEnabled={true}
                    source={{uri: 'https://netflix-clone-5b9eb.web.app/' }}
        />
      </View>

    );
  }

  function HeaderTitle() {
    return (

      <Image
      style={{ marginTop: 10, width: 420, height: 130 }}
      source={require('./assets/images/ChrisFlix3.png')}
      ></Image>

      // style={{ width: 50, height: 50 }}

    );
  }


  const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'WebView' }}
          />
        
          <Stack.Screen 
          name="Landing" 
          component={Landing}
          options={{ title: 'Home',
          headerTitle: props => <HeaderTitle {...props} />,
          headerStyle: { backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'}
        }}
          />
          <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details',
          headerStyle: { backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'}
          //headerTitle: props => <HeaderTitle {...props} />,
         }}
          />
          <Stack.Screen 
          name="API" 
          component={API} 
          options={{ title: 'MediaStack News' }}
          />
          <Stack.Screen 
          name="Guardian" 
          component={Guardian} 
          options={{ title: 'The Guardian' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    WebViewContainer: {
       marginTop: (Platform.OS == 'android') ? 20 : 0,
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
        zIndex: 2 
    },
    poster: {
        backgroundColor: '#000',
        flex: 1,
        marginLeft: 1,
        zIndex: 1
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
        fontSize: 36,
        marginLeft: 10,
        padding: 0,
        marginTop: 25,
        marginBottom: 15,
        color: 'white',
        zIndex: 2 
    }
  });


