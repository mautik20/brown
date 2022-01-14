import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />


          <TouchableOpacity   onPress={() => this.props.navigation.navigate("Home") }>
      <Image style={styles.logo1} source={require('../assets/Back.png')} />
         </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    logo1:{
    width : 35,  
   height:35, 
   marginLeft:"2%" ,
   marginTop:"2%"
  },
   
});