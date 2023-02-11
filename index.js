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
          <Text style={styles.title}>
            Beach 360 view
          </Text>
        </View>

        <View style={styles.greetingBox}>
          {/* <Text style={styles.greeting}>
          Made by 
          </Text> */}
          <Text style={styles.myName}>
            - Abhinav Dubey
          </Text>
        </View>
      </View>

      
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 0,
  },
  greeting: {
    fontSize: 10,
    color:"blue"

  },
  myName: {
    fontSize:20,
    color:'cyan',
  },
  title: {
    fontSize:40,
  },
});

AppRegistry.registerComponent('hello_react_360', () => hello_react_360);
