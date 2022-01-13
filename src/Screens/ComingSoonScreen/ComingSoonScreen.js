import React from 'react'
import { View, Text } from 'react-native'
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import styles from './styles';
import ProductComponent from '../../Components/ProductComponent';
import colors from '../../styles/colors';


const ComingSoonScreen = ({navigation}) => {
    return (
      <WrapperContainer style={{backgroundColor: colors.homeBgc}}>
        <HeaderComp navigation={navigation} title="Shopping Cart" />
        <View style={styles.filter}>
          <View style={styles.filterItem}>
            <Text>FILTER </Text>
          </View>
          <View style={styles.filterItem}>
            <Text>SORT</Text>
          </View>
          <View style={styles.filterItem}>
            <Text>GRID</Text>
          </View>
        </View>
        <ProductComponent columns={2} horizontal={false}/>
        <View style={{marginTop:50}}/>
      </WrapperContainer>
    );
}

export default ComingSoonScreen;
