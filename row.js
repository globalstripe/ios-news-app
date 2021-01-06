import React, {useState, useEffect} from 'react'
import {TouchableOpacity,TouchableHighlight, ScrollView, SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original"


function Row({title, fetchUrl, nav }) {
    
    const [movies, setMovies] = useState([]);
    

    // A snippet of code that runs under a specific conditional variable
    useEffect(() => {
        // if we leave [] blank ... run once when the row loads and do not run again
        // it is a dependancy on  movies changing or not.

        async function fetchData() {
            //console.log(fetchUrl)
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
            //console.log(request)
        }

        fetchData();

    }, [fetchUrl]);
 
    //console.table(movies)

    return (
       
        <View style={styles.row}>

            <Text style={styles.title}>{title}</Text>
           
            <ScrollView horizontal={true}>

                {movies.map(movie => (
            
                <View key={movie.id} style={styles.row}>
                {/* <Text>Movie Title {movie.title}</Text> */}

                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#000000"
                    onPress={() => {
                        nav.navigate('Details', {
                        movie
                        })
                    }}
                >
    
                <Image 
                    style={styles.logo}
                    source={{uri: base_url+movie.backdrop_path}}
                />
       
                </TouchableHighlight>

                </View>
                 
                ))}
        
            </ScrollView>
        </View>
        
    )
}

export default Row

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

        fontFamily: 'Verdana-Bold',
        fontSize: 20,
        backgroundColor: '#000',
        marginLeft: 1,
        padding: 0,
        marginTop: 15,
        marginBottom: 15,
        color: '#fff',
    },
    row: {
        marginLeft: 20,
        color: '#fff',
    },
    row_posters: {
        display: 'flex',

    }
  });

