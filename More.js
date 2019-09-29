import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  scroll,
  Image,
WebView,
ActivityIndicator} from 'react-native';
import gstyles from "./styles.js";
import Icon from "react-native-vector-icons/Feather";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import { EventRegister } from "react-native-event-listeners";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class More extends Component<Props> {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
      <AppContainer/>
      </View>
      )}
  }
  class More1 extends Component<Props> {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <View style={gstyles.topbar}>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 5 }}
            onPress={() => {
              EventRegister.emit("toggle", null);
            }}
          >
            <Icon name="menu" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                color: "#fff",
                fontSize: 22
              }}
            >
              ApnaInsti
            </Text>
          </View>
        </View>
         <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        
        <TouchableOpacity style={gstyles.box}  onPress={()=>{
          this.props.navigation.navigate("Kronos");
        }}>
                <Text style={gstyles.boxText} >KRONOS</Text>
                 <Text style={gstyles.boxText2} >Course and Grade Distribution</Text>
              </TouchableOpacity>
               <TouchableOpacity style={gstyles.box}  onPress={()=>{
          this.props.navigation.navigate("WIMP");
        }}>
                <Text style={gstyles.boxText} >WIMP</Text>
                 <Text style={gstyles.boxText2} >Where is my professor</Text>
              </TouchableOpacity>
               <TouchableOpacity style={gstyles.box}  onPress={()=>{
          this.props.navigation.navigate("MCMP");
        }}>
                <Text style={gstyles.boxText} >MCMP</Text>
                 <Text style={gstyles.boxText2} >My choice my professor</Text>
              </TouchableOpacity>
               <TouchableOpacity style={gstyles.box}  onPress={()=>{
          this.props.navigation.navigate("Sarathi");
        }}>
                <Text style={gstyles.boxText} >SARATHI</Text>
                 <Text style={gstyles.boxText2} >Travelling is easier together</Text>
              </TouchableOpacity>
              </View>
      </View>
    );
  }
}
class Kronos extends Component<Props> {
  static navigationOptions = { header: null };
  ActivityIndicatorLoadingView() {
    return (
      <View style={styles.actindi}>
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.ActivityIndicatorStyle}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={gstyles.topbar}>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 5 }}
            onPress={() => {
              EventRegister.emit("toggle", null);
            }}
          >
            <Icon name="menu" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                color: "#fff",
                fontSize: 22
              }}
            >
              ApnaInsti
            </Text>
          </View>
        </View>
        <WebView
          source={{ uri: "http://kronos.metakgp.org/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class WIMP extends Component<Props> {
  static navigationOptions = { header: null };
  ActivityIndicatorLoadingView() {
    return (
      <View style={styles.actindi}>
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.ActivityIndicatorStyle}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={gstyles.topbar}>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 5 }}
            onPress={() => {
              EventRegister.emit("toggle", null);
            }}
          >
            <Icon name="menu" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                color: "#fff",
                fontSize: 22
              }}
            >
              ApnaInsti
            </Text>
          </View>
        </View>
        <WebView
          source={{ uri: "https://wimp.metakgp.org" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class MCMP extends Component<Props> {
  static navigationOptions = { header: null };
  ActivityIndicatorLoadingView() {
    return (
      <View style={styles.actindi}>
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.ActivityIndicatorStyle}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={gstyles.topbar}>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 5 }}
            onPress={() => {
              EventRegister.emit("toggle", null);
            }}
          >
            <Icon name="menu" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                color: "#fff",
                fontSize: 22
              }}
            >
              ApnaInsti
            </Text>
          </View>
        </View>
        <WebView
          source={{ uri: "https://metakgp.github.io/mcmp/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class Sarathi extends Component<Props> {
  static navigationOptions = { header: null };
  ActivityIndicatorLoadingView() {
    return (
      <View style={styles.actindi}>
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.ActivityIndicatorStyle}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={gstyles.topbar}>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 5 }}
            onPress={() => {
              EventRegister.emit("toggle", null);
            }}
          >
            <Icon name="menu" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                color: "#fff",
                fontSize: 22
              }}
            >
              ApnaInsti
            </Text>
          </View>
        </View>
        <WebView
          source={{ uri: "http://sarathi.metakgp.org/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Kronos:Kronos,
    WIMP:WIMP,
    MCMP:MCMP,
    Sarathi:Sarathi,
    More1:More1,
  },
  {
    initialRouteName: "More1"
  }
);
const AppContainer = createAppContainer(RootStack);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
