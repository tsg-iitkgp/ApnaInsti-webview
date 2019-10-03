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
  
  ActivityIndicator
} from "react-native";
import { WebView } from 'react-native-webview';
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import IconA from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import { EventRegister } from "react-native-event-listeners";
import { width, height, totalSize } from "react-native-dimension";
import gstyles from "./styles.js";
import MainPage from "./MainPage.js";
import AboutUs from "./AboutUs.js";
import More from "./More.js";
import { Container, Footer, Body, Content } from "native-base";
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              Gymkhana Blog
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
class Kgpamica extends Component<Props> {
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              KGPAMICA
            </Text>
          </View>
        </View>
        <WebView
          source={{ uri: "https://www.kgpamica.com" }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
class KYB extends Component<Props> {
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              KGP Yellow Pages
            </Text>
          </View>
        </View>
        <WebView
          source={{ uri: "https://wiki.metakgp.org/w/Yellow_pages" }}
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              MetaKGP
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              ChillZone
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              MFQP
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
               marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              Reach Us
            </Text>
          </View>
        </View>
        <WebView
          source={{
            uri: "http://www.gymkhana.iitkgp.ac.in/blog/index.php/complaint/"
          }}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
        />
      </View>
    );
  }
}
const CustomDrawerContentComponent = props => (
  <Container>
    <View style={styles.image}>
      <Image source={require('./img.png')} style={styles.img}/>
    </View>
    <Content>
      <DrawerItems {...props} />
      
    </Content>

    <Footer style={{ height: 50, backgroundColor: "#0099ff" }}>
      <Body>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/company/technology-students-gymkhana-iit-kharagpur/about/"
              );
            }}
          >
            <IconA name="linkedin-square" style={styles.SocialIcons} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.facebook.com/TSG.IITKharagpur/");
            }}
          >
            <IconA style={styles.SocialIcons} name="facebook-square" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("mailto:tech.tsgiitkgp@gmail.com");
            }}
          >
            <IconA style={styles.SocialIcons} name="mail" />
          </TouchableOpacity>
        </View>
      </Body>
    </Footer>
  </Container>
);

const Navigator = createDrawerNavigator(
  {
    //DrawerNavigation: DrawerNavigation,
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        drawerLabel: "Gymkhana Website",
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={22} color={tintColor} />
        )
      }
    },
    Blog: {
      screen: Blog,
      navigationOptions: {
        drawerLabel: "Gymkhana Blog",
        drawerIcon: ({ tintColor }) => (
          <IonIcon name="ios-paper" size={22} color={tintColor} />
        )
      }
    },
    MetaKgp: {
      screen: MetaKgp,
      navigationOptions: {
        drawerLabel: "MetaKgp Wiki",
        drawerIcon: ({ tintColor }) => (
          <IconFA name="wikipedia-w" size={20} color={tintColor} />
        )
      }
    },
     Kgpamica: {
      screen: Kgpamica,
      navigationOptions: {
        drawerLabel: "KGPAMICA",
        drawerIcon: ({ tintColor }) => (
          <IconFA5 name="book-reader" size={20} color={tintColor} />
        )
      }
    },
    ChillZone: {
      screen: ChillZone,
      navigationOptions: {
        drawerLabel: "ChillZone",
        drawerIcon: ({ tintColor }) => (
          <AntdesignIcon name="smileo" size={22} color={tintColor} />
        )
      }
    },
    MFQP: {
      screen: MFQP,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="book-open" size={22} color={tintColor} />
        )
      }
    },
     KYB: {
      screen: KYB,
      navigationOptions: {
        drawerLabel: "KGP Yellow Pages",
        drawerIcon: ({ tintColor }) => (
          <MIcon name="phone-classic" size={22} color={tintColor} />
        )
      }
    },
    More: {
      screen: More,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="more-horizontal" size={22} color={tintColor} />
        )
      }
    },
    ReachUs: {
      screen: ReachUs,
      navigationOptions: {
        drawerLabel: "Reach Us",
        drawerIcon: ({ tintColor }) => (
          <Entypo name="new-message" size={22} color={tintColor} />
        )
      }
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <AntdesignIcon name="infocirlceo" size={22} color={tintColor} />
        )
      }
    },
    
  },
  {
    initialRouteName: "MainPage",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "drawerToggle",
    contentOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#000",

      activeBackgroundColor: "#eee"
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
  SocialIcons: {
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
    color: "#fff"
  },
  image:{
    height:130,
    justifyContent:'center',
    width:'100%',
    alignItems:'center'
  },
  img:{
    width:'100%',
    flex:1,

  }
});
