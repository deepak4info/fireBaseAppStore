import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React,{useRef, useState} from 'react'
import CustomStatusbar from '../../CommanComponents/CustomStatusbar'
import { BLACK, GRAY, THEME_COLOR1,THEME_COLOR3, } from '../../Utills/Color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Responsive/Responsive'

import ButtonComp from '../../CommanComponents/ButtonComp'
import AsyncStorage from '@react-native-async-storage/async-storage'

const WelcomeScreen = ({navigation}) => {
  const [sideData, setSideData] = useState([
    {title:'where does it come from ?', desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ', image: require('../../Assets/Images/s1.png')},
    {title:'where does it come from ?', desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ', image: require('../../Assets/Images/s2.png')},
    {title:'where does it come from ?', desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ', image: require('../../Assets/Images/s3.png')},
    {title:'where does it come from ?', desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ', image: require('../../Assets/Images/s4.png')},
])
const [currentIndex, setCurrentIndex] = useState(0);
const flatlistRef= useRef();

const goToNextScreen= async()=>{
  AsyncStorage.setItem('Is_User_NEW', 'yes');
  navigation.navigate('Login');
}


  return (
<View style={styles.container}>
    <CustomStatusbar bg={'#fff'} content={'dark-content'} />
    <View style={{width:'100%', height:responsiveHeight(50)}}>

    <FlatList 
     data={sideData}
     horizontal
     ref={flatlistRef}
     pagingEnabled
     onScroll={e=>{
      const x = e.nativeEvent.contentOffset.x;
      const ind = x / responsiveWidth(100);
      setCurrentIndex(ind.toFixed(0));  
     }}
     showsHorizontalScrollIndicator={false}
     renderItem={({item, index})=>{
        return (
            <View style={styles.slideItemView}>
                <Image source={item.image} style={styles.slideImage} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        );
     }}
     />

    </View>
    <View style={styles.indicatorView}>
        {sideData.map((item,index) => {
            return <View style={[styles.indicator,
            { backgroundColor:currentIndex == index ? THEME_COLOR1 : GRAY,}
            ]}></View>;
        })} 
    </View>
    <View style={styles.btnView}>
        {currentIndex > 0 && (
            <ButtonComp w={responsiveWidth(35)} h={responsiveHeight(5)} text={'Previous'} color={'white'} bg={THEME_COLOR3} r={responsiveWidth(5)}
onClick={()=>{
    setCurrentIndex(currentIndex - 1);
    flatlistRef.current.scrollToIndex({
        animation: true,
        index: parseInt(currentIndex) - 1,
    });
}}
/>
 )} 

<ButtonComp w={currentIndex < 1 ? responsiveWidth(80): responsiveWidth(35)} h={responsiveHeight(5)} text={currentIndex == sideData.length -1 ? "let's Go": 'Next'} color={'white'} bg={THEME_COLOR3} r={responsiveWidth(5)} 
onClick={()=>{
    if (currentIndex < sideData.length -1) {
        setCurrentIndex(currentIndex + 1);
        flatlistRef.current.scrollToIndex({
            animation: true,
            index: parseInt(currentIndex) + 1,
        });
    } else {
goToNextScreen();
    }
}}
/>
    </View>

    </View>
  )
}


export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    slideItemView:{
        width:responsiveWidth(100),
        height:responsiveHeight(50),
        justifyContent:'center',
        alignItems:'center',
    },
    slideImage:{
        width:'70%',
        height:'50%',
    },
    title:{
        fontSize:responsiveFontSize(3.5),
        color:BLACK,
        marginTop:responsiveHeight(5),
        width:'80%',
        textAlign:'center',
    },
    desc:{
        fontSize:responsiveFontSize(2),
        color:BLACK,
        marginTop:responsiveHeight(2),
        width:'80%',
        textAlign:'center',
    },
    indicator:{
        width:responsiveWidth(10),
        height:responsiveHeight(2),
        borderRadius:responsiveWidth(5),
        backgroundColor:THEME_COLOR1,
        marginLeft:responsiveWidth(2),
    },
    indicatorView:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:responsiveHeight(5),
    },
    btnView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        position:'absolute',
        bottom:responsiveHeight(4),
    },
});

