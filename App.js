import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [cont, setCont] = useState(0);
  const restar = () => {
    setCont(prevcont => prevcont - 1);
  };
  const sumar = () => {
    setCont(prevcont => prevcont + 1);
  };


  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.cont}>Contador</Text>
        <Text style={styles.cero}>{cont}</Text>
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity onPress={restar} style={styles.botonesLeft}>
          <Text style={styles.textos}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonesRight}onPress={sumar}>
          <Text style={styles.textos}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  cont:{
    fontWeight:"bold",
    fontSize:40,
  },
  cero: {
    fontWeight:"bold",
    fontSize: 90,
    textAlign: "center",
    marginTop:50,
  },
  textos: {
    fontSize: 34,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Alinea los botones en el eje vertical
  },
  botonesLeft: {
    height:60,
    width:40,
    flex: 1,
    backgroundColor: "#af7ac5",
    paddingLeft: 10,
    marginRight: 10,
    textAlign: "center",
    alignItems: 'center',
    justifyContent:"center",
    borderTopRightRadius:20,
    borderBottomRightRadius:40,
    borderTopLeftRadius:30,
  },
  botonesRight: {
    height:60,
    width:40,
    flex: 1,
    backgroundColor: "#af7ac5",
    paddingLeft: 10,
    marginLeft: 10,
    textAlign: "center",
    alignItems: 'center',
    justifyContent:"center",
    borderTopLeftRadius:20,
    borderBottomLeftRadius:40,
    borderTopRightRadius:30,
  },
});