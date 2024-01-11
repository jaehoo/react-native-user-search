import { View, Button, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function Resultados(props) {

  const renderItem = ({item}) => (
  
    <View key={item.id}>          
      <Text>Nombre: {item.firstName} {item.lastName}</Text>
      <Text>Email: {item.email}</Text>
      <Image style={styles.image} source={{uri: item.image}}/>
    </View>
  )

	return (
    <FlatList
      data={props.resultado}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width:60,
    height:60
  },
  content: {
    height: 300
  }
});