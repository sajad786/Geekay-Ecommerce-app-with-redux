import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {moderateScale, moderateScaleVertical, width, height} from '../styles/responsiveSize';

const Carousal = () => {
  const [index, setIndex] = useState(null);
  const [entries, setEntries] = useState(null)
  const [activeSlide, setActiveSlide] = useState(null)
//   const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const data = [
    {
      id: 1,
      img: 'https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg',
    },
    {
      id: 2,
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/6860/capsule_616x353.jpg?t=1599829743',
    },
    {
      id: 3,
      img: 'https://cdn.mos.cms.futurecdn.net/zYFMqxZ9Y99vSjfgtf5z78-480-80.jpg',
    },
    {
      id: 4,
      img: 'https://store-images.s-microsoft.com/image/apps.39710.64799328993088545.924c027a-5c35-4a82-852d-880fbb4a8e42.98f17590-217b-4d6d-a4aa-59e0db67ab61?q=90&w=480&h=270',
    },
    {
      id: 5,
      img: 'https://i.ytimg.com/vi/XMryC_-yuVg/maxresdefault.jpg',
    },
  ];

  const Pagination = () => (
       <Pagination
              dotsLength={data.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
  

  const renderItem = ({item, index}) => {
    return (    
      <View style={styles.itemContainer}>
        <Image style={styles.CarousalImage} source={{uri:item.img}} />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        // ref={c => (this.carousel = c)}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH }
        itemWidth={ITEM_WIDTH +100}
        containerCustomStyle={styles.carouselContainer}
        // inactiveSlideShift={0}
        onSnapToItem={index => setActiveSlide(index)}
        // onSnapToItem={index => setIndex(index)}
        //   scrollInterpolator={scrollInterpolator}
        //   slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        autoplay={true}
        loop={true}
      />
      {Pagination}
      {/* <Text style={styles.counter}></Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: moderateScale(180),
  },
  itemContainer: {
    width: '100%',
    height: moderateScale(180),
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  CarousalImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default Carousal;
