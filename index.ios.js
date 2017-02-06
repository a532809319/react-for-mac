/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import styles from './app/Styles/Main'
import React, { Component } from 'react';
import MovieList from './app/Components/MovieList';
import {
  // TouchableHighlight,
  // TabBarIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  // ActivityIndicatorIOS,
  // NavigatorIOS,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

export default class MovieTalk extends Component {
    constructor(props){
      super(props);
    }
  render(){
    return(
      <MovieList />
    );
  }




}







AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
