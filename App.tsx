//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoList from './src/TodoList';
import TodoWithRedux from './src/TodoWithRedux';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import GoogleMapIntegration from './src/GoogleMap';
import OnBoardingPage from './src/OnBoardingPage';
import ImagePickerCompo from './src/ImagePicker';

// create a component
const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      {/* <Text>App compoentnen</Text> */}
      {/* <TodoList/> */}
      <TodoWithRedux/>
      {/* <GoogleMapIntegration/>
      {/* <OnBoardingPage/> */}
      {/* <ImagePickerCompo/> */}
    </View>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
   // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
