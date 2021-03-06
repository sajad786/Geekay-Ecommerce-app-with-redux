import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';
import HeaderComp from '../../Components/HeaderComp';
import { useTheme } from '@react-navigation/native';

const MapScreen = ({navigation}) => {
  const mapRef = useRef(null);

  const [userLat, setUserLat] = useState('');
  const [userLong, setUserLong] = useState('');
  const theme = useTheme()

  // const [state, setState] = useState({
  //   userLat,
  //   userLong,
  // });

  // const {userLat, userLong} = state

  // const updateState = (data) => {
  //   setState ({
  //     ...state,
  //     data,
  //   })
  // }

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info, 'infooo');
      // updateState({userLat:info?.coords?.latitude, userLong:info?.coords?.longitude})
      setUserLat(info?.coords?.latitude);
      setUserLong(info?.coords?.longitude);
    });
  };

  const mapNightTheme = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const markers = [
    {
      id: 1,
      coords: {
        lat: '30.30.7145',
        long: '776.7149',
      },
      adddress: 'shahi Majra, Mohali',
      state: 'punjab',
      country: 'India',
    },
    {
      id: 2,
      coords: {
        lat: '30.7143',
        long: '76.7011',
      },
      adddress: 'phase 7, Mohali',
      state: 'punjab',
      country: 'India',
    },
    {
      id: 3,
      coords: {
        lat: '30.7320',
        long: '76.7726',
      },
      adddress: 'Sector 22, Chandigarh',
      state: 'punjab',
      country: 'India',
    },
    {
      id: 4,
      coords: {
        lat: '30.7236',
        long: '76.7976',
      },
      adddress: 'Sector 27, Mohali',
      state: 'punjab',
      country: 'India',
    },
  ];

  const standardstyle = [
    {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
]

  let {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  console.log(ASPECT_RATIO, 'ASPECT_RATIO');
  const LATITUDE_DELTA = 0.092;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        customMapStyle={theme.dark ? mapNightTheme : standardstyle}
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        style={styles.map}
        region={{
          latitude: userLat,
          longitude: userLong,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          // latitudeDelta:  LATITUDE_DELTA,    //0.0922,
          // longitudeDelta: LONGITUDE_DELTA //0.0922 * 1.2,
        }}>

       <View >
        <HeaderComp style={{position:'absolute', top:60, left:10}}  navigation={navigation} title="Map Screen " />  
       </View>
        {markers.map((marker, index) => {
          console.log(marker, 'Markers ======');
          return (
            <Marker
              key={marker?.id}
              moveOnMarkerPress={true}
              // ref={mapRef.current}
              coordinate={{
                latitude: marker?.coords?.lat,
                longitude: marker?.coords?.long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                // latitudeDelta: LATITUDE_DELTA,  //0.092,
                // longitudeDelta: LONGITUDE_DELTA //0.0922 * 1.2,
              }}
              title="chnadigarh"
              description="click and get the details">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Callout>
                <View style={styles.calloutView}>
                  <Text>{marker.adddress}</Text>
                  <Text>{marker.state}</Text>
                  <Text>{marker.country}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
        <Marker
          coordinate={{
            latitude: userLat,
            longitude: userLong,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/6153/premium/6153497.png?token=exp=1643377308~hmac=bb60dfcaf65a4628f5edfe239bf3bc2b',
            }}
            style={{height: 60, width: 60}}
          />
          <Callout>
                <View style={styles.calloutView}>
                  <Text> userCurrent Lat {userLat}</Text>
                  <Text>UserCurrent Long {userLong}</Text>
                </View>
              </Callout>
        </Marker>
      </MapView>
    </SafeAreaView>
  );
};

export default MapScreen;
