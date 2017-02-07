/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import styles from './app/Styles/Main'
import React, { Component } from 'react';
//import MovieList from './app/Components/MovieList';
import ComeList from './app/Components/USBox';
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
  TabBarIOS
  // ActivityIndicatorIOS,
  // NavigatorIOS,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

export default class MovieTalk extends Component {
    constructor(props){
      super(props);
      this.state={
        selectedTab:'most'
      }
    }
  render(){
    return(
      <TabBarIOS>
          <TabBarIOS.Item
              systemIcon="featured"
              selected={this.state.selectedTab === 'featured'}
              onPress={()=>{
                this.setState({
                  selectedTab:'featured'
                });
              }}

            >
          <MovieList/>
          </TabBarIOS.Item>
          <TabBarIOS.Item systemIcon="most-viewed"
                selected={this.state.selectedTab === 'most'}
                onPress={()=>{
                  this.setState({
                    selectedTab:'most'
                  });
                }}
            >
            <ComeList/>
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }




}







AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
