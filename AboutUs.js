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
              ApnaInsti
            </Text>
          </View>
        </View>
        <View style={styles.about}>
          <View style={styles.madeby}>
            <Text style={styles.heading}>
              Made by Tech Team 
            </Text>
            <Text style={styles.name}>
              Techonology Students Gymkhana
            </Text>
          </View>
          <View style={styles.vamsi}>
            <Text style={styles.heading}>APP CREDITS:</Text>
            <Text style={styles.name}>D.Venkata Vamsi</Text>
            
          </View>
          <View style={styles.shivamJha}>
            <Text style={styles.heading}>Special Thanks To</Text>
            <Text style={styles.name}>Shivam Kumar Jha</Text>
            <Text style={styles.name}>tech.tsgiitkgp@gmail.com</Text>
          </View>
        </View>
        <View style={styles.foot}>
          <Text><IconA name='copyright'/> copyright Gymkhana-2019</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between'
  },
 about:{
  alignItems:'center',
 
  textAlign:'center',
  fontFamily:'Roboto-Regular',


 },
heading:{
  color:'#000',
  fontSize:25,
  textAlign:'center',
  fontFamily:'Roboto-Regular',
},
name:{
  fontSize:20,
  textAlign:'center',
  fontFamily:'Roboto-Regular',
},
vamsi:{
  marginTop:height(3),
  borderWidth:2,
  borderColor:'#0099ff',
  borderRadius:5,
  width:width(80),
  height:height(10),

},
shivamJha:{
  marginTop:height(3),
  borderWidth:2,
  borderColor:'#0099ff',
  borderRadius:5,
  width:width(80),
  height:height(15),
},
madeby:{
  borderWidth:2,
  borderColor:'#0099ff',
  borderRadius:5,
  width:width(80),
  height:height(15),

},
foot:{
  justifyContent:'flex-end',
  width:width(100),
  height:height(5),
  
  alignItems:'center',
}
});
