import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class ApiCalls extends Component {
  apiCall = async () => {
    try {
      const cows = await fetch("https://192.168.0.110/MyFoodPhoto/GetAll");
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }

    console.log(cows);

    console.log("We got past the API call");
  };

  xhrCall = () => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log("success", request.responseText);
      } else {
        console.warn("error");
      }
    };

    request.open("GET", "https://192.168.0.110/MyFoodPhoto/GetAll");
    request.send();
  };

  render() {
    return (
      <View>
        <Text>Api Calls!</Text>
        <Button
          onPress={this.apiCall}
          title="Do Stuff"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.xhrCall}
          title="Other Call"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
