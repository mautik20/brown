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

           <Text style={styles.header}>Brown_Brickss</Text>

          <TouchableOpacity style={[styles.button,{marginTop:"40%",}]}
           onPress={() => this.props.navigation.navigate("Shopping") }>
           <Text style={styles.buttonText}>Shopping</Text>
         </TouchableOpacity>

          <TouchableOpacity style={[styles.button,{marginTop:"10%",}]}
           onPress={() => this.props.navigation.navigate("Travelling") }>
           <Text style={styles.buttonText}>Travelling</Text>
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
   
    button:{
   justifyContent : 'center',
   alignSelf : 'center', 
   borderWidth : 2,
   borderRadius : 15, 
   width : 250, 
   height:75,
   backgroundColor:"red" 
   },
   buttonText : { 
    textAlign : 'center', 
    color : 'white',
    fontFamily:"Bell-Mt",
    fontSize:30 
    },
    header:{
   textAlign: 'end',
   marginTop:"0.5%",
   backgroundColor:"brown",
   color:"white",
   fontFamily:"Bell-Mt",
   fontSize:33,
   padding: 10,
    },
   
});