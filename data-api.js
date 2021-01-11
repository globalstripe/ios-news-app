import React, {useState, useEffect} from 'react'
import {TouchableOpacity,TouchableHighlight, Linking, ScrollView, SafeAreaView, StyleSheet, Image, Text, Button, View } from 'react-native';
import axios from './axios';

const base_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Spinal%20Tap&type=trailer&key=AIzaSyBOb-HeB2dOb3CadR3N9dOlNzuNp3VMlu4"
const query_urlZZ = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Spinal%20Tap&type=trailer&key=AIzaSyBOb-HeB2dOb3CadR3N9dOlNzuNp3VMlu4"
const APIKEY = 'AIzaSyBOb-HeB2dOb3CadR3N9dOlNzuNp3VMlu4'
const query_url = 'https://content.guardianapis.com/search?api-key=04509637-9231-418c-b242-e4fb6912afd1&show-fields=thumbnail&page-size=20'
const guardian_APIKEY = '04509637-9231-418c-b242-e4fb6912afd1'

/// Add this to get thumbnals!  &show-fields=thumbnail

function Guardian({ navigation }) {
    
    const [apiResponse, setResponseData] = useState([]);

    console.log("Entered Guardian Data API Function:")
    
    // A snippet of code that runs under a specific conditional variable
    useEffect(() => {
        // if we leave [] blank ... run once when the row loads and do not run again
        // it is a dependancy on  movies changing or not.

        async function fetchData() {
            //console.log(fetchUrl)
            const request = await axios.get(query_url);
            console.log("Axios Query RAN")
            setResponseData(request.data.response.results)
            //setVideos(request.data.items);
            console.log('***************************************************')
            console.log('Request', request.data.response.results)
            console.log('***************************************************')
            console.log(new Date())
            console.log('***************************************************')
            //console.log("PageInfo: ", request.data.pageInfo)
            //console.log("Item: ", request.data.items[1].kind)
            console.log("Status:", request.status)
            //console.log("Request:", request)
            //console.log("Headers:", request.headers)
            console.log("Status:", request.data.response.status)
            console.log("Example Data Item:", request.data.response.results[1].webTitle)
            console.log("Thumbnail:", request.data.response.results[1].fields.thumbnail)
            // return request;
        }

        fetchData();

    }, [query_url]);
 
    //console.log('YouTube Videos', videos)

    return (
        <View >

            <ScrollView 
            vertical={true}
            showsVerticalScrollIndicator={false} 
            > 
                {apiResponse.map( (apiData, index) => (

                <View key={index} style={styles.container}>
                    
                <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#111000"
                onPress={ ()=>{Linking.openURL(apiData.webUrl)}}
                >  
           
                <Image 
                style={styles.image}
                source={{
                // Use ternary operator to check for undefined!
                // 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                uri: apiData.fields === undefined ? 'https://logos-download.com/wp-content/uploads/2016/05/The_Guardian_logo_blue-700x123.jpg' : apiData.fields.thumbnail,
                cache: 'force-cache'
                    }
                }   
                />

                </TouchableHighlight>

                        <Text style={styles.title}> 
                        Catergory: {apiData.sectionName}{"\n"}                
                        {apiData.webTitle}{"\n"} 
                        {apiData.webPublicationDate}
                        </Text>

                        {/* <Text>{JSON.stringify(apiData.fields)}</Text> */}
                        {/* <Text>{apiData.fields === undefined ? "****Undefined*****" : "OK"}</Text> */}
                       
                    </View>
                )) 
                } 

            </ScrollView>
        </View>
        
    )
}

export default Guardian

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'stretch',
      },
      image: {
        flex: 1,
        resizeMode: 'contain',
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        marginTop: 1,
        width: 428,
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
          width: 400,
          height: 120,
          marginLeft: 10,
          marginRight: 0,
          padding: 0,
          marginTop: 8,
          marginBottom: 1,
          color: '#000',
      },
    row: {
        marginLeft: 20,
        color: '#fff',
    },
    row_posters: {
        display: 'flex',

    }
  });


// Guardian News API Object
// request.data.response.results

//   Object {
//     "apiUrl": "https://content.guardianapis.com/us-news/2021/jan/07/capitol-attack-trump-targeted-journalists",
//     "id": "us-news/2021/jan/07/capitol-attack-trump-targeted-journalists",
//     "isHosted": false,
//     "pillarId": "pillar/news",
//     "pillarName": "News",
//     "sectionId": "us-news",
//     "sectionName": "US news",
//     "type": "article",
//     "webPublicationDate": "2021-01-08T00:35:23Z",
//     "webTitle": "'We're the news now': Pro-Trump mob targeted journalists at US Capitol",
//     "webUrl": "https://www.theguardian.com/us-news/2021/jan/07/capitol-attack-trump-targeted-journalists",
//   },