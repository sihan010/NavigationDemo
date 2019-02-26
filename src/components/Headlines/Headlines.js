import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  static navigationOptions = ({navigation}) => {
    return{
      title: 'Headlines',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft:()=>{
        return(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Text style={styles.welcome}>D</Text>
          </TouchableOpacity>
        )
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>News Headlines</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("News")}>
          <Text>Go to Full News</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
