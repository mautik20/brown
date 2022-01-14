import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  
    render() {
        const path = `https://www.youtube.com/`
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <SafeAreaView style={styles.droidSafeArea} />
             
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: "50%", marginBottom: "50%", }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  })