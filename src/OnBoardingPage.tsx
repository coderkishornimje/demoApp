//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const OnBoardingPage = () => {

const [currentIndex,setCurrentIndex]=useState(0);

const images=[
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpjDHoDdjgCsi_69-pBSyjRa9FxYsfV5EI-b27ntClA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s'
]


useEffect(()=>{
const interval= setInterval(()=>{
setCurrentIndex(prevINdex=>(prevINdex+1)%images.length);
 },2000)
  return ()=>clearInterval(interval);
},[])
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
            <Image source={{uri:images[currentIndex]}} style={{height:200,width:200}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default OnBoardingPage;
