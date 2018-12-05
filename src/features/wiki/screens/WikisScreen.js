// @flow
"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import appConfig from "@src/app.json";
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler
} from "@common/helpers";
import { Platform, Text, Image, View, Button, StatusBar } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import * as projectActions from "@projects.redux/actions";
import Icon from "react-native-vector-icons/FontAwesome";
import { HeaderTitle } from "@common.components";
import ActionButton from "react-native-action-button";
import styles from "./styles/wikis";

class WikisScreen extends React.Component {
  componentWillUnMount() {
    removeAndroidBackButtonHandler();
  }
  componentDidMount() {
    //global.notif.scheduleNotif();
    const { actions, navigation } = this.props;

    if (Platform.OS === "android") {
      removeAndroidBackButtonHandler();
      handleAndroidBackButton(() => navigation.navigate("Home"));
    }

    // actions.listWikis({
    //   state: "projects",
    //   filter: { include: "trackers,issue_categories,enabled_modules" }
    // });
  }
  render() {
    const { actions, projects, navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>Wiki</Text>
          <ActionButton
            buttonColor={appConfig.backgroundColor}
            fixNativeFeedbackRadius={true}
            offsetX={13}
            offsetY={27}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

//export default MainScreen;

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...projectActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WikisScreen);