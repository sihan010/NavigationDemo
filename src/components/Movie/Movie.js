import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  static navigationOptions = ({navigation}) => {
    return{
      title: 'Movies',
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
        <Text style={styles.welcome}>List of Movies</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
          <Text>Go to Movie Details</Text>
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
