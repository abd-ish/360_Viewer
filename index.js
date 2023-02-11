import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class hello_react_360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.myName}>
            Made by Abhinav Dubey
          </Text>
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
          Made by 
          </Text>
          <Text style={styles.myName}>
            Abhinav Dubey
          </Text>
        </View>
      </View>

      
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
  },
  greeting: {
    fontSize: 30,
    color:"cyan"

  },
  myName: {
    fontSize: 50,
    color:'blue',
  },
});

AppRegistry.registerComponent('hello_react_360', () => hello_react_360);
