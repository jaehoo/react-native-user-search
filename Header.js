import { Image, View, StyleSheet, Text } from "react-native";

export default function Header(props) {
  return (

    <View style={styles.cabecera}>
      <Image source={require("./assets/logo192.png")} style={styles.image} />
      <Text  style={styles.title}>Bienvenido a la página de JOSE ALBERTO SANCHEZ</Text>
    </View>)
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 10
  },
  cabecera: {
    flexDirection:'row',
    backgroundColor: '#778899',
    justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
   
  }

});