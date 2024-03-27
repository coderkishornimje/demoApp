//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

const ImagePickerCompo = () => {
  const defauImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsACo8q8yWutWVYn3T972pW87bo5Y3UQ25HvHjH1YaQ&s';
  
  const [imageSource, setImageSource] = useState(defauImage);
  const [capturedImages,setCapturedImages] = useState([]);

 console.log(capturedImages,'==capturedImages==')

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    }
  };
  const cameraOptions:any={
    mediaType: 'photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
  }

  const openCamera = () => {
    ImagePicker.launchCamera(cameraOptions, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        response.assets?.map((e)=>{
          console.log(e.uri,'=====uri');
          setCapturedImages([...capturedImages,{uri:e.uri}]);
          return setImageSource(e.uri)
        });
        console.log(response,'===Ressource')
        //setImageSource(source);
      }
    });
  };

  const selectImage = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        response.assets?.map((e)=>{
          return setImageSource(e.uri)
        });
        //setImageSource(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="open camera" onPress={openCamera} />
        <Button title="Pick image from gallery" onPress={selectImage} />
        {!imageSource ? '': (
          <Image
            source={{uri:imageSource}}
            style={{width: 200, height: 200}}
          />
        )}
      </View>
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
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

//make this component available to the app
export default ImagePickerCompo;
