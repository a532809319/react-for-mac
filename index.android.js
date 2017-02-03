/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MovieTalk extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View stytle={[styles.item,styles.itemOne]}>
           <Text  style={style.itemText}> 1 </Text>
         </View>
         <View stytle={[styles.item,styles.itemTwo]}>
           <Text  style={style.itemText}> 2 </Text>
         </View>
         <View stytle={[styles.item,styles.itemThree]}>
           <Text  style={style.itemText}> 3 </Text>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:23
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
