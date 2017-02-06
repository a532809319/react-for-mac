/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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

    this.state ={
      movies:new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1 !== row2
    }),
    loaded:false
  };
  this.fetchData();
}
  fetchData(){
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseDate => {
    console.log(responseDate);
    this.setState({
      movies:this.state.movies.cloneWithRows(responseDate.subjects),
      loaded:true
    })

  }).done();
}


  render() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>loaded</Text>
          </View>
        </View>
      );
    }
    return (

  <View  style={styles.container}>

      <ListView
         dataSource={this.state.movies}
          renderRow={
            movie => <Text style={styles.itemText}>{movie.title}</Text>
          }
               >

      </ListView>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems:'center'
  },
  overlayHeader:{
    fontSize:33,
    fontFamily:'Helvetica Neue',
    fontWeight:'800',
    color:'rgb(170, 102, 195)',
    padding:10
  },
  overlaySubHeader:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    padding:8,
    paddingTop:0,
    color:'rgb(13, 120, 189)'
    //backgroundColor:'yellow'
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },

  image:{
    width:100,
    height:100,
    // backgroundColor:'red',
    margin:6,
    resizeMode:'cover'

  },

  item:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#6435c9',
    margin:6
  },
  itemOne:{ backgroundColor:'red',alignItems:'flex-start',alignSelf:'flex-start'},
  itemTwo:{
    alignItems:'center'
  },
  itemThree:{
    alignItems:'flex-end'
  },
  itemText:{
    fontSize:26,
    fontFamily:'Helvetica Neue',
    fontWeight:'900',
    color:'#6435c9',
    padding:30

  },
  container: {
    flex: 1,
    // flexDirection:'row',
    // backgroundColor:'#eaeff7',
    paddingTop:23,

    // margin:30,
    // borderWidth:1,
    //
    // borderColor:'#6435c9',
    // borderRadius:16,
    // shadowColor:'#6435c9',
    // shadowOpacity:0.6,
    // shadowRadius:2,
    // shadowOffset:{
    //   height:10,
    //   width:3
    // }
  },
  title:{
    marginTop:10,
    fontSize:26,
    color:'#6435c9',
    textAlign:'center',
    fontStyle:'italic',
    letterSpacing:10,
    lineHeight:33,
    fontFamily:'Helvetica Neue',
    fontWeight:'800'
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
