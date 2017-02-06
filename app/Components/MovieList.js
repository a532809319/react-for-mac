import React, { Component } from 'react';
import styles from '../Styles/Main';

import {
  // TouchableHighlight,
  // TabBarIOS,
  // AppRegistry,
  // StyleSheet,
  Text,
  View,
  Image,
  ListView,
  // ActivityIndicatorIOS,
  // NavigatorIOS,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class MovieList extends Component {
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
    });


  })
  .then(()=>{
  console.log(this.state.movies);
    console.log(1);
  })

  .done();
}
renderMovieList(movie){
  return(
    <View style={styles.Item}>
      <View style={styles.ItemImage}>
         <Image
           source={{

           uri : movie.images.large
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>
            {movie.title}
        </Text>
        <Text style={styles.itemMeta}>
            {movie.original_title}({movie.year})

        </Text>
        <Text style={styles.redText}>
              <Text>
                 {movie.rating.average}
              </Text>
        </Text>
      </View>
    </View>
  );
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
          renderRow={this.renderMovieList}//不能加state

               >

      </ListView>
  </View>

    );
  }
}
export  {MovieList as default}
