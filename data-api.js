import React, {useState, useEffect} from 'react'
import {TouchableOpacity,TouchableHighlight, Linking, ScrollView, SafeAreaView, StyleSheet, Image, Text, Button, View } from 'react-native';
import axios from './axios';

const base_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Spinal%20Tap&type=trailer&key=AIzaSyBOb-HeB2dOb3CadR3N9dOlNzuNp3VMlu4"
const query_urlZZ = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Spinal%20Tap&type=trailer&key=AIzaSyBOb-HeB2dOb3CadR3N9dOlNzuNp3VMlu4"
const APIKEY = 'AIzaSyBOb-HeB2dOb3CadR3N9dOlNzuNp3VMlu4'
const query_url = 'https://content.guardianapis.com/search?api-key=04509637-9231-418c-b242-e4fb6912afd1'
const guardian_APIKEY = '04509637-9231-418c-b242-e4fb6912afd1'

function API({ navigation }) {
    
    const [apiResponse, setResponseData] = useState([]);

    console.log("Entered Data API Function:")
    
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
            console.log("Request:", request)
            //console.log("Headers:", request.headers)
            console.log("Status:", request.data.response.status)
            console.log("Example Data Item:", request.data.response.results[1].webTitle)
            // return request;
           
        }

        fetchData();

    }, [query_url]);
 
    //console.log('YouTube Videos', videos)

    return (
        <View >

            <Text>Guardian News API</Text>
            <Text>-------------------</Text>
            <Text> </Text>

            <ScrollView>

                {apiResponse.map(apiData => (

                    <View>
                        <Text> {apiData.sectionName}{"\n"}</Text>                 
                        <Text> {apiData.webTitle}{"\n"} </Text> 
                        <Text> {apiData.webPublicationDate}</Text> 
                        <Button 
                            title="Click me" 
                            onPress={ ()=>{Linking.openURL(apiData.webUrl)}} 
                        />
                    </View>
                )) 
                } 

            </ScrollView>
        </View>
        
    )
}

export default API

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