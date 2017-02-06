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
  // ActivityIndicatorIOS,
  // NavigatorIOS,
} from 'react-native';
class HeadText extends Component{

  render(){
    return (
      <Text stytle={styles.itemText}>
        {this.props.children}
      </Text>
    );
  }
}


export default class MovieTalk extends Component {


  render() {
    return (

  <View  style={styles.container}>
    <Image
style={styles.backgroundImage}
source={{uri:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1486344781&di=084a6ad23044ce78202f510a212b5bd5&src=http://c.hiphotos.baidu.com/image/pic/item/7af40ad162d9f2d38d7056c8acec8a136327ccb0.jpg'}}
 //source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/279759ee3d6d55fb924d52c869224f4a21a4dd50.jpg'}}
  >
  <View style={styles.overlay}>
    <Text style={styles.overlayHeader}>在座的各位都是辣鸡</Text>
    <Text style={styles.overlaySubHeader}>啊啊小标题</Text>
  </View>
  </Image>
  </View>

    );
  }
}

const styles = StyleSheet.create({
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
