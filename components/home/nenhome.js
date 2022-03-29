import React from "react";
import { Image, StyleSheet, View } from "react-native";
import NenHome from "../../assets/nenhome.png";

export default function NenHomeIteam(props) {
  return (
    <View>
      <Image source={NenHome} style={styles.nenhome} />
    </View>
  );
}
const styles = StyleSheet.create({
  nenhome: {
    position: "absolute",
    left: "-1px",
    top: "0.29px",
    width: "430.08px",
    height: "170.71px",
    background: "url(nenhome.png)  no-repeat",
  },
});
