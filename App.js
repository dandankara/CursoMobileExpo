import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  // vai ter uma valor inicial da imagem biscoito, ou seja, o biscoito fechado
  const [cookie, setCookie] = useState(require("./src/assets/biscoito.png"));

  const [frase, setFrase] = useState("");

  let frases = [
    "Nunca foi azar, sempre foi incopetência.",
    "Novo dia, nova derrota, bom dia!.",
    "Não pare e nem comece",
    "Hoje estão rindo do seu esforço, amanhã rirão do seu fracasso",
    "Você é mais fraco do que parece.",
    "Nunca é tarde para desistir.",
    "Acredite, você nasceu para conquistar grandes fracassos.",
    "Tenta! Não vai dar certo",
  ];

  function CookieQuebrado() {
    //Vai gerar um numero aleatorio referente ao indice do array
    let randomFrase = Math.floor(Math.random() * frases.length);

    // pega o array e dentro do array faz a operação de sortear um indice
    setFrase(frases[randomFrase]);

    // pega a imagem quebrada do cookie e coloca quando eu clico em abrir
    setCookie(require("./src/assets/biscoitoAberto.png"));
  }

//Função para resetar o biscoito da sorte
  function ResetCookie() {
      //Reseta para a imagem do biscoito inteiro
    setCookie(require("./src/assets/biscoito.png"));
    //Limpa a View das frases
    setFrase("");
  }

  return (
    <View style={styles.ViewContainer}>

      <Text style={styles.Title}> BISCOITO DA SORTE(OU NÃO)</Text>

      <Image style={styles.ImageCookie} source={cookie} />

      <Text style={styles.Frases}> {frase} </Text>

      <TouchableOpacity style={styles.Button} onPress={CookieQuebrado}>
        <View style={styles.ButttonView}>
          <Text sytle={styles.ButtonText}>Abrir biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={ResetCookie}>
        <View style={styles.ButttonView}>
          <Text sytle={styles.ButtonText}>Reset</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Title:{
    fontWeight:'bold',
    fontSize:25,
    marginBottom: 20
  },

  ImageCookie: {
    width: 200,
    height: 200,
  },

  Frases: {
    fontSize: 15,
    color: "purple",
    margin:20,
    textAlign: "center",
  },

  Button: {
    width: 200,
    height: 50,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 20,
  },

  ButttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ButtonText: {
    fontSize:40,
    fontWeight: '700',
  },
});
