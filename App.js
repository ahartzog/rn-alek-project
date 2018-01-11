/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const name = "alek";
export default class App extends Component<{}> {
  apiCall = async () => {
    console.log("hello");
    const cows = "mooo";
    console.log(cows);
    // const url = "http://mockbin.org/bin/89ecd187-ea11-400f-b54e-90f42d1276e7/view";
    const url = "https://httpbin.org/post";
    fetchInit = {
      method: "POST"
    };
    const call = await fetch(url, fetchInit);
    console.log(call);
    console.log(call.Response);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Name is: {name}</Text>
        <Button
          onPress={this.apiCall}
          title="Do Stuff"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
