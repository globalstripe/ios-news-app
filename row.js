import React, {useState, useEffect} from 'react'
import {ScrollView, SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl}) {
    
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

            <Text>{title}</Text>

           
            <ScrollView horizontal={true}>

                {movies.map(movie => (
            
                <View key={movie.id} style={styles.row}>
                {/* <Text>Movie Title {movie.title}</Text> */}
                <Image 
                style={styles.logo}
                source={{uri: base_url+movie.backdrop_path}}
                />
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
        width: 96,
        height: 98,
      },
    row: {
        marginLeft: 20,
        color: '#fff',
    },
    row_posters: {
        display: 'flex',

    }
  });

