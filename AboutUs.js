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
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import { EventRegister } from "react-native-event-listeners";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import gstyles from "./styles.js";
import Icon from "react-native-vector-icons/Feather";
import { width, height, totalSize } from "react-native-dimension";
import IconA from "react-native-vector-icons/AntDesign";

export default class AboutUs extends Component<Props> {
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
          <View style={{ justifyContent: "center" , alignItems:'center',}}>
            <Text
              style={{
               
                marginRight:width(1),
                color: "#fff",
                fontSize: 22,
                fontFamily:'Roboto-Regular',
              }}
            >
              About Us
            </Text>
          </View>
        </View>
        <View style={styles.about}>
        <View style={styles.logoImg}>
          <Image source={require('./logo.png')} style={styles.logo} />
        </View>
          <View style={styles.madeby}>
            <Text style={styles.heading}>
              Made with <IconA name="heart" size={20} color="#ff0000"/>{'\n'} by 
               Tech Team 
            </Text>
            <Text style={styles.name}>
              Techonology Students Gymkhana
            </Text>
          </View>
    <Text style={styles.name1}>
             More Features Coming Soon
            </Text>
        </View>
        <View style={styles.foot}>
          <Text><IconA name='copyright'/> 2019 TSG IIT KHARAGPUR</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',

  },
 about:{
  alignItems:'center',
  borderColor:'#0099ff',
  borderWidth:2,
  borderRadius:10,
  width:'80%',
  textAlign:'center',
  fontFamily:'Roboto-Regular',
  marginLeft:'10%'


 },
heading:{
  color:'#000',
  fontSize:25,
  textAlign:'center',
  fontFamily:'Roboto-Regular',
},
name:{
  fontSize:15,
  textAlign:'center',
  fontFamily:'Roboto-Regular',
},
name1:{
  fontSize:15,
  textAlign:'center',
  fontFamily:'Roboto-Regular',
  marginTop:50,
},
logoImg:{
  width:'100%',
  height:height(30),
  justifyContent:'center',
  alignItems:'center',
},
logo:{
  width:100,
  height:120,
},
foot:{
  justifyContent:'flex-end',
  width:width(100),
  height:height(5),
  
  alignItems:'center',
}
});
