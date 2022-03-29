import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Trangchu from "../../assets/trangchu.png";

export default function TrangchuIteam(props) {
  return (
    <View>
      <Image source={Trangchu} style={styles.trangchu} />
    </View>
  );
}
const styles = StyleSheet.create({
  trangchu: {
    position: "absolute",
    left: "182px",
    top: "866px",
    width: "60px",
    height: "59.62px",
    background: "url(trangchu.png)  no-repeat",
  },
});
