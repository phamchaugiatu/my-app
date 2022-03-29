import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Nguon from "../../assets/nguon.png";

export default function NguonIteam(props) {
  return (
    <View>
      <Image source={Nguon} style={styles.nguon} />
    </View>
  );
}
const styles = StyleSheet.create({
  nguon: {
    position: "absolute",
    left: "25px",
    top: "882px",
    width: "61px",
    height: "43.72px",
    background: "url(nguon.png)  no-repeat",
  },
});
