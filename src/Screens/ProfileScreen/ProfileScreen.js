import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginManager} from 'react-native-fbsdk';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';

const ProfileScreen = ({navigation}) => {
  const ProfileData = useSelector(state => state.auth.userData);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const ConfirmLogout = () => {
    setModal(!modal);
  };

  const load = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const OnLogout = () => {
    // setIsLoading(true);
    actions.logout();
    GoogleSignin.signOut();
    LoginManager.logOut();
    // load();
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={colors.blue} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.blue, paddingBottom:-35}} >
    <WrapperContainer>
      <View style={styles.container}>
        <View style={styles.upperSection}>
          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginTop: moderateScaleVertical(24),
            }}>
            <HeaderComp
              iconStyle={styles.headerIconStyle}
              titleStyle={styles.headerTitleStyle}
              navigation={navigation}
              title="My Profile"
            />

            {/* profile lowerSection absolute  */}

            <View style={styles.OuterProfilePicView}>
              <View style={styles.InnerProfilePicView}>
                {!!ProfileData.profile ? (
                  <View>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: ProfileData?.profile}}
                    />
                  </View>
                ) : (
                  <View>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: imagePath.profilePic}}
                    />
                  </View>
                )}

                <View>
                  <Text style={styles.profileNameText}>
                    {ProfileData?.name}
                  </Text>
                  <Text style={styles.profileEmailText}>
                    {!!ProfileData?.email ? (
                      <Text>{ProfileData?.email}</Text>
                    ) : (
                      <Text>yourEmail@gmail.com</Text>
                    )}
                  </Text>
                </View>
              </View>
            </View>

            {/* till here  */}
          </View>
        </View>
        <View style={{flex: 7}}>
          <View style={styles.lowerSection}>
            <View style={styles.lowerSectionItemWrapper}>
              <Image
                style={styles.lowerSectionIconStyle}
                source={imagePath.ic_phone}
              />
              <View>
                {!!ProfileData?.phone ? (
                  <Text style={styles.lowerSectionTextStyle}>
                    {ProfileData?.phone_code} {ProfileData?.phone}
                  </Text>
                ) : (
                  <Text style={styles.lowerSectionTextStyle}>
                    update Phone Number
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.CART_SCREEN)}
              style={styles.lowerSectionItemWrapper}>
              <Image
                style={[styles.lowerSectionIconStyle, {tintColor: 'black'}]}
                source={imagePath.ic_CART}
              />
              <Text style={styles.lowerSectionTextStyle}>Cart Items</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.MAP_SCREEN)}
              style={styles.lowerSectionItemWrapper}>
              <Image
                style={styles.lowerSectionIconStyle}
                source={imagePath.ic_logout}
              />
              <Text style={styles.lowerSectionTextStyle}>Map Screen </Text>
            </TouchableOpacity>
           
            <TouchableOpacity
              onPress={ConfirmLogout}
              style={styles.lowerSectionItemWrapper}>
              <Image
                style={styles.lowerSectionIconStyle}
                source={imagePath.ic_logout}
              />
              <Text style={styles.lowerSectionTextStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal screen goes from here  */}

        {/* <Modal
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <View style={styles.modalOuterView}>
            <View style={styles.modalInnerView}>
              <Text style={styles.modalText}>
                Are You sure You want to
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  {' '}
                  logout
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: moderateScale(20),
                }}>
                <TouchableOpacity
                  onPress={() => setModal(!modal)}
                  activeOpacity={0.7}
                  style={[styles.ModalBtn, {backgroundColor: 'red'}]}>
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={OnLogout}
                  activeOpacity={0.7}
                  style={[styles.ModalBtn, {backgroundColor: 'blue'}]}>
                  <Text style={styles.modalBtnText}>confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}

      </View>
    </WrapperContainer>
    </SafeAreaView>
  );
};

export default ProfileScreen;
