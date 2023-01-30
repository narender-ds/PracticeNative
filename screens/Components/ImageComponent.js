import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ImageComponent = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={props.imagesource} style={props.style} />
      
    </View>

  );

};

export default ImageComponent;