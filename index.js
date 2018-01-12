import { AppRegistry } from "react-native";
import App from "./App";

// fetch logger

global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
  return global._fetch(uri, options, ...args).then(response => {
    console.log("Fetch", { request: { uri, options, ...args }, response });
    return response;
  });
};

//Method that breaks formdata
/*
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;
*/
AppRegistry.registerComponent("AlekProject", () => App);
