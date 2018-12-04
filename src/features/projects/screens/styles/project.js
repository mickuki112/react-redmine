// @flow
"use strict";

import { StyleSheet } from "react-native";
import appConfig from "@src/app.json";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    paddingTop: 56,
    backgroundColor: "#333"
  },
  screenContainer: {
    flex: 1
  },
  welcome: {
    fontFamily: "Raleway-Bold",
    fontSize: 26,
    textAlign: "center",
    margin: 10,
    marginBottom: 40,
    color: appConfig.backgroundColor
  },
  title: {
    fontFamily: "Raleway-Bold",
    fontSize: 21,
    margin: 10,
    marginTop: 20,
    color: "#fff"
  },
  description: {
    color: "#EEE",
    fontFamily: "Raleway-Regular",
    fontSize: 16
  },
  bold: {
    fontFamily: "Raleway-Bold"
  }
});
