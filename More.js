import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  scroll,
  Image,
  WebView,
  ActivityIndicator,
  BackHandler
} from "react-native";
import gstyles from "./styles.js";
import Icon from "react-native-vector-icons/Feather";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import { EventRegister } from "react-native-event-listeners";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons"

import { createStackNavigator, createAppContainer } from "react-navigation";
import { width, height, totalSize } from "react-native-dimension";


export default class More extends Component<Props> {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginRight:width(40)
            }}
          >
            <Text
              style={{
            
                alignItems: "center",
                   color: "#ebebeb",
                fontSize: 22,
                textAlign:'center'
              }}
            >
              ApnaInsti
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("ChillZone");
            }}
          >
            <Text style={gstyles.boxText}>ChillZone</Text>
            <Text style={{fontSize:13,
    marginTop:4,
    alignItems:'center',
    textAlign:'center',}}>Find a place to chill, NOW!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("MFQP");
            }}
          >
            <Text style={gstyles.boxText}>MFQP</Text>
            <Text style={gstyles.boxText2}>Search for Question Papers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("Kronos");
            }}
          >
            <Text style={gstyles.boxText}>KRONOS</Text>
            <Text style={gstyles.boxText2}>Course and Grade Distribution</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("WIMP");
            }}
          >
            <Text style={gstyles.boxText}>WIMP</Text>
            <Text style={gstyles.boxText2}>Where is my professor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("MCMP");
            }}
          >
            <Text style={gstyles.boxText}>MCMP</Text>
            <Text style={gstyles.boxText2}>My choice my professor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("Sarathi");
            }}
          >
            <Text style={gstyles.boxText}>SARATHI</Text>
            <Text style={gstyles.boxText2}>Travelling is easier together</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("WhatSlot");
            }}
          >
            <Text style={gstyles.boxText}>What Slot</Text>
            <Text style={gstyles.boxText2}>check the slots occupied by courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.box}
            onPress={() => {
              this.props.navigation.navigate("GYFT");
            }}
          >
            <Text style={gstyles.boxText}>GYFT</Text>
            <Text style={gstyles.boxText2}>Get your freaking timetable
</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
class ChillZone extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.ChillZone.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginRight: width(1),
                   color: "#ebebeb",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              ChillZone
            </Text>
          </View>
      
             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.ChillZone.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "http://chill.metakgp.org/" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.ChillZone = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class MFQP extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.MFQP.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginRight: width(1),
                   color: "#ebebeb",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              MFQP
            </Text>
          </View>
 
             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.MFQP.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "https://qp.metakgp.org/" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.MFQP = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class Kronos extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.Kronos.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                   color: "#ebebeb",
                fontSize: 22
              }}
            >
              Kronos
            </Text>
          </View>
  
     
             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.kronos.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "http://kronos.metakgp.org/" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.Kronos = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class WIMP extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.WIMP.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                   color: "#ebebeb",
                fontSize: 22
              }}
            >
              WIMP
            </Text>
          </View>

             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.WIMP.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "https://wimp.metakgp.org" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.WIMP = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class MCMP extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.MCMP.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                   color: "#ebebeb",
                fontSize: 22
              }}
            >
              MCMP
            </Text>
          </View>

             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.MCMP.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "https://metakgp.github.io/mcmp/" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.MCMP = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class Sarathi extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.Sarathi.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginLeft: "10%",
                alignItems: "center",
                   color: "#ebebeb",
                fontSize: 22
              }}
            >
              Sarathi
            </Text>
          </View>

             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.Sarathi.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "http://sarathi.metakgp.org/" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.Sarathi = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class WhatSlot extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.WhatSlot.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginRight: width(1),
                   color: "#ebebeb",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              WhatSlot
            </Text>
          </View>
      
             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.ChillZone.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "https://whatslot.metakgp.org" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.WhatSlot = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
class GYFT extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.GYFT.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginRight: width(1),
                   color: "#ebebeb",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              GYFT
            </Text>
          </View>
      
             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.ChillZone.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "https://gyft.metakgp.org" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.GYFT = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />

      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Kronos: Kronos,
    WIMP: WIMP,
    MCMP: MCMP,
    Sarathi: Sarathi,
    More1: More1,
    ChillZone:ChillZone,
    MFQP: MFQP,
    WhatSlot:WhatSlot,
    GYFT:GYFT,
  },
  {
    initialRouteName: "More1"
  }
);
const AppContainer = createAppContainer(RootStack);
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
