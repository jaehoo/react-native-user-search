import { useState } from "react";
import Resultados from "./Resultados";
import Header from "./Header";
import { mock1 } from "./constants/users.js";
import CONFIG from "./config/config";
import { Button, Text, TextInput, View, StatusBar, StyleSheet } from "react-native";

const USE_SERVER = CONFIG.use_server;


function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);

  const callServer = async (param) => {
    // console.log('a', param, query);
    if (USE_SERVER) {

      let queryparams = param === "all" ? "?limit=" + CONFIG.num_items : "/search?q=" + query;

      console.log(`${CONFIG.server_url}${queryparams}`);

      // fetch(`${CONFIG.server_url}${queryparams}`)
      //   .then(response => {
      //     if (response.status === 200) {
      //       return response.json();
      //     } else {
      //       throw new Error('Failed to load data');
      //     }
      //   })
      //   .then(data => {
      //     setResultado(data.users);
      //   })
      //   .catch(error => {
      //     console.error('Error: ', error);
      //     setResultado({ error: { description: error.message } });
      //   });

      try {

        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        if (response.status === 200) {
          const data = await response.json();
          setResultado(data.users);
        }
        else{
          throw new Error('Failed to load data');
        }
        
      } catch (error) {
        console.log(error);
        setResultado({ error: { description: error.message } });
      }

    } else {
      setResultado(mock1.users);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#CCFFD4" barStyle="dark-content" />
      <Header />

      <View style={styles.form}>

        <Text>Buscador de usuarios</Text>
        <TextInput placeholder="Texto a buscar" value={query} onChangeText={setQuery} />
        <Button title="Buscar" onPress={() => callServer()} />
        <Button title="Ver todos" onPress={() => callServer("all")} />
      </View>
      <View style={styles.resultList}>
        {resultado && <Resultados numitems={CONFIG.num_items} resultado={resultado} />}
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    height: 230,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  resultList: {
    flex: 8,
    paddingBottom: 3
  },
  title: {
    color: 'white',
    fontWeight: 'bold',

  }

});

export default App;
