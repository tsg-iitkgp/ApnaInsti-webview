import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  scroll,
  Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DrawerNavigation from "./DrawerNavigation.js";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import { EventRegister } from "react-native-event-listeners";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default class App extends Component<Props> {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#0099ff" barStyle="light-content" />
       <AppContainer/>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    DrawerNavigation:DrawerNavigation,
  },
  {
    initialRouteName: "DrawerNavigation"
  }
);
const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
