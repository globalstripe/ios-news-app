import React, {useState, useEffect} from 'react'
import {
  TouchableOpacity,
  TouchableHighlight, 
  Linking, 
  ScrollView,  
  RefreshControl, 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  Text, 
  Button, 
  View 
} from 'react-native';
import axios from './axios';

// MediaStack Free News API

const API_KEY = "access_key=afbe2f890863d4fa45484d199e7291f2";;
const QUERY_STRING = "&country=gb,us&sources=cnn&languages=en&limit=100";
const query_url = 'http://api.mediastack.com/v1/news?access_key=afbe2f890863d4fa45484d199e7291f2&country=gb,us&sources=cnn&languages=en&limit=10' 
//+ `/news?${API_KEY}${QUERY_STRING}`

console.log('MediaStack: ', query_url)

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
            setResponseData(request.data.data)
            //setVideos(request.data.items);
            console.log('***************************************************')
            console.log('Request', request.data.data)
            console.log('***************************************************')
            console.log(new Date())
            console.log('***************************************************')
            //console.log("PageInfo: ", request.data.pageInfo)
            //console.log("Item: ", request.data.items[1].kind)
            console.log("Status:", request.status)
            console.log("Request:", request)
            //console.log("Headers:", request.headers)
              //console.log("Status:", request.data.response.status)
              //console.log("Example Data Item:", request.data.response.results[1].webTitle)
            // return request;
           
        }

        fetchData();

    }, [query_url]);

    const handleClick = (news) => {
      // console.log("HandleClick: ", news)
      window.open(news.url)
      console.log("News Title: ", news?.title)
      console.log("News Description: ",news.description)
      console.log("News Source: ", news.source)
      console.log("URL", news.url)
  }
    
    //console.log('YouTube Videos', videos)

    return (

        <View>

            <ScrollView 
            vertical={true}
            showsVerticalScrollIndicator={false} 
            > 

                { /* Map over the array returned by the API call */}

                  {apiResponse.map( (news, index) => (

                  <View key={index} style={styles.container}>
                  
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#111000"
                    onPress={ ()=>{Linking.openURL(news.url)}}
                  >      

                    <Image 
            
                    style={styles.image}
                    source={{
                      uri: news.image,
                      cache: 'force-cache'
                            }
                }   />
                   
                </TouchableHighlight> 

                 <Text  style={styles.title}>
                   {news.title}{"\n"}
                   {news.published_at}
                </Text>

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
    width: 434,
    height: 244,
    alignItems: 'stretch',
    },

    title: {
      fontFamily: 'Verdana',
        fontSize: 18,
        backgroundColor: '#fff',
        width: 414,
        height: 80,
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
    },
    poster: {
      backgroundColor: '#fa0',
      flex: 1,
      marginTop: 55,
      marginLeft: 1,
    },
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