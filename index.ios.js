/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  TabBarIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicatorIOS,
  NavigatorIOS,
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

class Featured extends Component {
  render (){
    return (
    //   <NavigatorIOS style={styles.container}
    //   initialRoute={{
    //     title:'推荐',
    //  component:MovieTalk
    //   }}
    // />
    <NavigatorIOS
  style={
    styles.container
  }
  initialRoute={{
    title:'推荐电话',
    component:HeadText
  }}
  shadowHidden='true'
  barTintColor="darkslateblue"
  titleTextColor="rgba(0,45,3,0.5)"
    />
    );
  }
}
export default class MovieTalk extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'user_box'
    }
  }

  render() {
    return (



      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item systemIcon="featured"
          selected={
            this.state.selectedTab==='featured'
          }
          onPress={()=>{
            this.setState({
              selectedTab:'featured'
            })
          }}
          >

          <Text>
                3啊啊啊啊ß
          </Text>

        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon="most-viewed"
          selected={this.state.selectedTab==='user_box'}
           onPress={
             ()=>{
               this.setState({
                 selectedTab:'user_box'
               })
             }
           }>
          <Text style={{marginTop:20}}>
                4ds萨德
          </Text>

        </TabBarIOS.Item>

        <TabBarIOS.Item systemIcon="most-viewed"
          selected={this.state.selectedTab==='user_box'}
           onPress={
             ()=>{
               this.setState({
                 selectedTab:'user_box'
               })
             }
           }>
          <Featured />


        </TabBarIOS.Item>

      </TabBarIOS>




    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor:'#eaeff7',
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
