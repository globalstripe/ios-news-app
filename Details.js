import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Button, Image, View, Text, Platform } from 'react-native';
import movieTrailer from 'movie-trailer'
import { Constants } from 'expo'
import WebView from 'react-native-webview'

const base_url = "https://image.tmdb.org/t/p/original"

function DetailsScreen({route, navigation}) {

    //console.log('Entered DetailsScreen')
    //console.log('Setting base_url: ' + base_url)

    const [trailerUrl, setTrailerUrl] = useState('https://www.youtube.com/watch?v=sfM7_JLk-84&autoplay=0');
    
    const { movie } = route.params;

    //console.log('Getting Movie Object')

    movieTrailer(movie?.title || "TopGun")
    .then((url) => {
        //console.log('Getting YouTube Trailer for: ' + movie.title)
        //console.log('MovieTrailer URL: ', url)
        //console.log("Setting Trailer URL")

        setTrailerUrl(url)
        // console.log("Done")

        //const urlParams = new URLSearchParams(new URL(url).search)
        //console.log("URL Params: ", urlParams)
        //  ust get the ?v= querystring value!

        //setTrailerUrl(urlParams.get("v"))
        //setTrailerUrl(url)
        //console.log("trailerUrl: ", trailerUrl)
    })
    .catch((error) => console.log("MovieTrailer: ", error));
  
    return (
        
     <ScrollView style={styles.container}>   

        <WebView
            style={ styles.WebViewContainer }
            //javaScriptEnabled={true}
            //domStorageEnabled={true}
            source={{uri: trailerUrl+'&autoplay=0'}}
        />

        <Image 
            style={styles.poster}
            source={{uri: base_url+movie.backdrop_path}}
        />

        <Text style={styles.title} >
            {movie.title}
        </Text>

        {/* <Text style={styles.id}>ID: {movie.id}</Text> */}

        <Text style={styles.overview}>
            {movie.overview}
        </Text>

        <View style={styles.button2}>

            {/* <Button    
            titleStyle={{
            color: "white",
            fontSize: 16,
            }}
            
            title="Play"
            
            onPress={() => navigation.navigate('Home')}>

            </Button> */}

            {/* <Button
            title="Play Trailer"
            key={movie.id}
            onClick={() => handleClick(movie)}
            >    
            </Button> */}

        </View>
      
      </ScrollView>    
      
    );
  }

  export default DetailsScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    WebViewContainer: {
        marginTop: (Platform.OS == 'android') ? 20 : 10,   
        height: 285, 
        marginTop: 150,
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
        marginBottom: 15,
        color: 'white',
        zIndex: 2 
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
    overview: {
        //fontFamily: 'Roboto-Black',  <-- External font 
        // List of all internal ios fonts for react-native  
        // https://github.com/react-native-training/react-native-fonts/blob/master/IosFonts.js
        position: 'absolute',
        fontFamily: 'Verdana-Bold',
        fontSize: 18,
        marginLeft: 10,
        padding: 0,
        marginTop: 450,
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


