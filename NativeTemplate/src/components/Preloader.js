import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


const PreLoader = (props) => {
  const _renderLoader = () => {
    if (props.preLoaderVisible) return (
        <View style={styles.background}>
            <Image source={require('../assets/preloader.gif')} />
        </View>
    );
    else return null;
    }
    return (
      _renderLoader()
    );
}

const styles = StyleSheet.create ({
  background: {
    backgroundColor: 'white',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PreLoader;