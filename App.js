// In App.js in a new project

import * as React from 'react';
import { SafeAreaView, TouchableOpacity, TouchableHighlight, Button, StyleSheet, View, Image, Text } from 'react-native';
import {  DrawerActions, NavigationContainer, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Landing from './Landing'
import Guardian from './data-api'
import API from './mediastack-news-data-api'
import DetailsScreen from './Details'
import WebView from 'react-native-webview'
import Settings from './Settings'
import { Ionicons } from '@expo/vector-icons';
// You can view all the icons availble here  https://icons.expo.fyi/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Appbar } from 'react-native-paper';

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

function HeaderTitle(props) {
 
    return (
       
      <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#111000"
      onPress={() => {this.props.navigation.navigate('DrawerOpen'); } }
      //{() => nav.openDrawer()}
      >  

      <Image
      style={{ marginTop: 10, width: 420, height: 130 }}  
      source={require('./assets/images/ChrisFlix3.png')}
      ></Image>

      </TouchableOpacity>
      // style={{ width: 50, height: 50 }}

    );
  }

const Drawer = createDrawerNavigator(); 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
      <Tab.Screen name="Home" 
            options={{tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            }}
      component={MainStackNavigator} />
      <Tab.Screen name="Movies" 
                  options={{tabBarLabel: 'Movies',
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="camcorder" color={color} size={size} />
                  ),
                  }}
      component={MovieStackNavigator} />

      <Tab.Screen name="CNN" 
      options={{tabBarLabel: 'CNN',
      tabBarIcon: ({ color, size }) => (
      <Ionicons  name="file-tray" color={color} size={size} />
      ),
      }}
      component={NewsStackNavigator} />
     
      <Tab.Screen name="Guardian" 
      options={{tabBarLabel: 'Guardian',
      tabBarIcon: ({ color, size }) => (
      <Ionicons  name="file-tray-full-sharp" color={color} size={size} />
      ),
      }}
      component={GuardianStackNavigator} />


      <Tab.Screen name="Settings" 
                        options={{tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box" color={color} size={size} />
                        ),
                        }}
      component={SettingsStackNavigator} />
      </Tab.Navigator>
    );
  };

  const MovieStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
      name="Movies" 
      component={HomeScreen}
      options={{ title: 'WebView' }}
      />
      </Stack.Navigator>
    );
  }

  const NewsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="API" component={API} options={{ title: 'MediaStack News' }} />
      </Stack.Navigator>
    );
  }

  const GuardianStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
      name="Guardian" 
      component={Guardian} 
      options={{ title: 'The Guardian' }}
      />
      </Stack.Navigator>
    );
  }

  const SettingsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }

  const Stack = createStackNavigator();

  const screenOptionStyle = {
    headerStyle: {
      //backgroundColor: "#9AC4F8",
      backgroundColor: "#000",
    },
    headerTintColor: '#fff',
    headerBackTitle: "Back",
    headerTitleStyle: {fontWeight: 'bold', fontSize: 20}
  };

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const MainStackNavigator = () => {
 
    return (
      <Stack.Navigator initialRouteName="Landing"
      screenOptions={({navigation}) => ({
          height: 40,
          headerLeft: () => (
          <Appbar.Header 
          statusBarHeight={10} 
          style={{fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: 'black'}}
          >
          <Appbar.Action icon="menu" color='white' onPress={() => 
            navigation.dispatch(DrawerActions.toggleDrawer())}
          />
          </Appbar.Header>
          ),
          headerRight: () => (
            <Appbar.Header 
            statusBarHeight={10} 
            style={{fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: 'black'}}
            >
            <Appbar.Action icon={MORE_ICON} color='white' onPress={() => 
              navigation.dispatch(DrawerActions.toggleDrawer())}
            />
             </Appbar.Header>
             ),

            headerTintColor: '#fe1',
            headerBackTitle: "Back",
            headerTitleStyle: {fontWeight: 'bold', fontSize: 20, color: 'white'},

            headerTitle: () => (
              <View style={{paddingTop: 2, width: 200, height: 50 }}
               >
              <Image
              style={{ 
                flex:1,
                width: undefined,
                height: undefined,
              }}  
              source={require('./assets/images/ChrisFlix3.png')}
              ></Image></View>
            ),
            headerStyle: { 
            //backgroundColor: "#9AC4F8", 
            backgroundColor: "#000",
            }
          }
          )
  
        
        }
      >

      <Stack.Screen 
      name="Landing" 
      component={Landing}
      // options={{ 
      // headerTitle: props => <HeaderTitle {...props} />,
      // headerStyle: { backgroundColor: '#000'},
      // headerTintColor: '#fff',
      // headerTitleStyle: {fontWeight: 'bold'}
      // }}
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
      <Stack.Screen 
      name="Settings" 
      component={Settings} 
      options={{ title: 'Settings' }}
      />

    </Stack.Navigator>

    );
  }

  


  function App() {
    return (
     
      <NavigationContainer style={{backgroundColor: 'black'}}>

        <Drawer.Navigator 
         title="Go somewhere"
          drawerStyle={{
            backgroundColor: '#000',
            width: 240,
          }}
        overlayColor='transparent'
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
          inactiveTintColor: '#fff',
        }}
        initialRouteName="Home">

        <Drawer.Screen 
        name="Home" component={BottomTabNavigator} />

        <Drawer.Screen 
        name="Settings" component={Settings} />
        <Drawer.Screen name="Guardian" component={Guardian} />

        <Drawer.Screen name="MediaStack" component={API} />
        
      </Drawer.Navigator>
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


