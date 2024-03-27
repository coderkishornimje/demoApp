//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
    Camera,
  useCameraDevice,
  useCameraPermission,
  useMicrophonePermission,
} from 'react-native-vision-camera';

// create a component
//const {hasPermission, requestPermission} = useCameraPermission();
//const {hasPermission, requestPermission} = useMicrophonePermission();

const CameraScreen = () => {
    const device:any = useCameraDevice('back', {
        physicalDevices: [
          'ultra-wide-angle-camera',
          'wide-angle-camera',
          'telephoto-camera'
        ]
      })

  //if (device == null) return <NoCameraDeviceError />;
  return (
    <View style={styles.container}>
       <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
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
export default CameraScreen;
