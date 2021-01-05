import * as React from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:1,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
              src: "https://www.finconsgroup.com/imgpub/1997058/1000/0/meet_your_future.webp"
          },
          {
              title:"Item 2",
              text: "Text 2",
              src: "https://www.finconsgroup.com/imgpub/1992999/1000/0/s-being11.webp"
          },
          {
              title:"Item 3",
              text: "Text 3",
              src: "https://www.finconsgroup.com/imgpub/1997058/1000/0/meet_your_future.webp"
          },
          {
              title:"Item 4",
              text: "Text 4",
              src: "https://www.finconsgroup.com/imgpub/1997058/1000/0/meet_your_future.webp"
          },
          {
              title:"Item 5",
              text: "Text 5",
              src: "https://www.finconsgroup.com/imgpub/1992999/1000/0/s-being11.webp"
          },
          {
            title:"Item 6",
            text: "Text 6",
            src: "https://www.finconsgroup.com/imgpub/1997058/1000/0/meet_your_future.webp"
        },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'#000',
              borderRadius: 5,
              height: 250,
              padding: 5,
              marginTop: 1,
              marginLeft: 15,
              marginRight: 25, }}>

            <Text>{item.title}</Text>
            <Image style={styles.logo}
             source={{uri: item.src}}
            />
           <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#000', paddingTop: 150, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', color:'black'}}>
                <Carousel
                  layout={"stack"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  height={398}
                  sliderWidth={300}
                  itemWidth={390}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) }
                  autoplay={true}
                  enableMomentum={false}
                  lockScrollWhileSnapping={true}
                  autoplayDelay={1000}
                  autoplayInterval={3000}
                  activeAnimationType={"decay"}
                  loop={true}
                />
 
            </View>
          </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 396,
      height: 398,
    },
  });
  

