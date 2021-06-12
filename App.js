import React from "react";
import { ImageBackground, StyleSheet, Button, View, Image, Linking, TouchableOpacity } from "react-native";

const App = () => (
  <View style={{backgroundColor:'#333333'}, styles.container}>
    <View style={[{flex: 1, backgroundColor:'#333333'}, styles.elementsContainer]}>
      <View style={{flex: 1.3, backgroundColor: '#333333'}} >
        <View style={{zIndex:10, position:'absolute', alignSelf: 'center', bottom:50, flexDirection: "row"}}>
          <TouchableOpacity
            onPress={ ()=>{ Linking.openURL('https://www.facebook.com/chefsimonezanoni')}}
          >
            <Image
              style={{width:45, height: 45, marginRight:5}}
              source={require('./assets/logo-facebook2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ ()=>{ Linking.openURL('https://www.instagram.com/chefzanoni_simone/')}}
          >
            <Image
              style={{width: 45, height: 45, marginLeft:5}}
              source={require('./assets/logo-insta2.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#333333'}, styles.overlay} />
        <ImageBackground source={require('./assets/CasaZanoni.jpg')} style={styles.image} />
      </View>
      <View style={{flex: 2, backgroundColor: '#333333', marginTop:5}} >
        <ImageBackground source={require('./assets/_DSF6542.jpeg')} style={styles.image} />
          <View style={{backgroundColor:"#333333", width:260, position:'absolute', alignSelf: 'center', top:-30, padding:10, borderRadius:10, zIndex:9}}>
            <Button
              title="Boutique Casa Zanoni 🇮🇹"
              color="white"
              backgroundColor="#333333"
              textStyle={{fontFamily: "Montserrat"}}
              onPress={ ()=>{ Linking.openURL('https://casa-zanoni.com')}}
            />
          </View>
          <View style={{backgroundColor:"#333333", width:260, position:'absolute', alignSelf: 'center', top:70, padding:10, borderRadius:10, zIndex:9}}>
            <Button
              title="Club Casa Zanoni 🇮🇹"
              color="white"
              backgroundColor="#333333"
              textStyle={{fontFamily: "Montserrat"}}
              onPress={ ()=>{ Linking.openURL('https://club-casa-zanoni.com')}}
            />
          </View>
          <View style={{position:'absolute', alignSelf: 'center', top:230, zIndex:9}}>
          <Image
            style={{width: 200, height: 200}}
            source={require('./assets/bombaAtomica.png')}
          />
          </View>
          <View style={{backgroundColor:'#333333'}, styles.overlay} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#333333"
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: '#FEDE54',
    zIndex:3,
    width:'100%',
    height:'100%'
  }  
});

export default App;