import React, {Component} from 'react';
import {  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
 
  ActivityIndicator} from 'react-native';
  import { WebView } from 'react-native-webview';
import IconA from "react-native-vector-icons/AntDesign";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Feather";
import IconFA from "react-native-vector-icons/FontAwesome";
import { EventRegister } from "react-native-event-listeners";
import gstyles from './styles.js';
import { width, height, totalSize } from "react-native-dimension";

export default class MainPage extends Component<Props> {
  componentWillMount() {
    this.listener = EventRegister.addEventListener("toggle", data => {
      this.props.navigation.toggleDrawer();
    });
  }
  static navigationOptions = { header: null };
  ActivityIndicatorLoadingView() {
    return (
      <View style={styles.actindi}>
      <ActivityIndicator
        color="#7878ff"
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
                fontSize: 22,
                fontFamily:'Roboto-Regular',
              }}
            >
              Gymkhana Website
              
            </Text>
          </View>
        </View>
       <WebView 
       source={{uri:'http://www.gymkhana.iitkgp.ac.in/index.php'}}
       domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
       />
  

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
 actindi:{
  flex:1,
  marginTop:height(40),
 }
});
