import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  WebView,
  ActivityIndicator
} from "react-native";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import IconA from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import IconFA from "react-native-vector-icons/FontAwesome";
import { EventRegister } from "react-native-event-listeners";
import { width, height, totalSize } from "react-native-dimension";
import gstyles from "./styles.js";
import MainPage from "./MainPage.js";
import AboutUs from './AboutUs.js';
import More from './More.js';

import {
  createAppContainer,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
export default class DrawerNavigation extends Component<Props> {

  static navigationOptions = { header: null };
  render() {
    return <Drawers />;
  }
}

class CustomDrawerContentComponent extends Component<Props> {
  ComponentDidMount(){
  
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <View style={gstyles.mainBlocks}>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("MainPage");
                this.props.navigation.closeDrawer();
              }}
            >
              <Icon name="home" style={gstyles.icon} />
              <Text style={gstyles.blockText}>Gymkhana Website</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("Blog");
                this.props.navigation.closeDrawer();
              }}
            >
              <IonIcon name="ios-paper" style={gstyles.icon} />
              <Text style={gstyles.blockText}>Gymkhana Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("MetaKgp");
                this.props.navigation.closeDrawer();
              }}
            >
              <IconFA name="wikipedia-w" style={gstyles.icon} />
              <Text style={gstyles.blockText}>MetaKGP Wiki</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("ChillZone");
                this.props.navigation.closeDrawer();
              }}
            >
              <AntdesignIcon name="smileo" style={gstyles.icon} />
              <Text style={gstyles.blockText}>ChillZone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("MFQP");
                this.props.navigation.closeDrawer();
              }}
            >
              <Icon name="book-open" style={gstyles.icon} />
              <Text style={gstyles.blockText}>MFQP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("ReachUs");
                this.props.navigation.closeDrawer();
              }}
            >
              <Entypo name="new-message" style={gstyles.icon} />
              <Text style={gstyles.blockText}>ReachUs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
                this.props.navigation.navigate("AboutUs");
                this.props.navigation.closeDrawer();
              }}
            >
              <AntdesignIcon
                name="infocirlceo" style={gstyles.icon} />
              <Text style={gstyles.blockText}>AboutUs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gstyles.blocks]}
              onPress={() => {
               this.props.navigation.navigate("More");
               this.props.navigation.closeDrawer()
              }}
            >
              <Icon name="more-horizontal" style={gstyles.icon} />
              <Text style={gstyles.blockText}>More</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',width:'100%', alignItems:'flex-end',justifyContent:'center', flexDirection:'row',
marginTop:height(9)}}>
         <TouchableOpacity onPress={()=>{Linking.openURL('https://www.linkedin.com/company/technology-students-gymkhana-iit-kharagpur/about/')}}
><IconA name='linkedin-square'  style={styles.SocialIcons}/></TouchableOpacity>
            <TouchableOpacity  onPress={()=>{Linking.openURL('https://www.facebook.com/TSG.IITKharagpur/')}}
><IconA style={styles.SocialIcons} name='facebook-square'/></TouchableOpacity>
<TouchableOpacity  onPress={()=>{Linking.openURL('mailto:tech.tsgiitkgp@gmail.com')}}
><IconFA style={styles.SocialIcons} name='google-plus-square'/></TouchableOpacity>
  </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
class Blog extends Component<Props> {
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
          source={{ uri: "http://www.gymkhana.iitkgp.ac.in/blog/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class MetaKgp extends Component<Props> {
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
          source={{ uri: "https://wiki.metakgp.org/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class ChillZone extends Component<Props> {
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
          source={{ uri: "http://chill.metakgp.org/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class MFQP extends Component<Props> {
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
          source={{ uri: "https://qp.metakgp.org/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class ReachUs extends Component<Props> {
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
          source={{ uri: "http://www.gymkhana.iitkgp.ac.in/blog/index.php/complaint/" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}


const Navigator = createDrawerNavigator(
  {
    DrawerNavigation: DrawerNavigation,
    MainPage: MainPage,
    Blog: Blog,
    MetaKgp: MetaKgp,
    ChillZone: ChillZone,
    MFQP: MFQP,
    ReachUs: ReachUs,
   More:More,
   AboutUs:AboutUs,
  },
  {
    initialRouteName: "MainPage",
    contentComponent: CustomDrawerContentComponent,
    drawerBackgroundColor: "#0000A0",
    contentOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#1999CE",

      activeBackgroundColor: "#1999CE",
      inactiveBackgroundColor: "#ffffff"
    }
  }
);
const Drawers = createAppContainer(Navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actindi: {
    flex: 1,
    marginTop: height(40)
  },
   SocialIcons:{
  fontSize:30,
  marginLeft:10,
  marginRight:10,
  color:'#fff',

 },
});
