import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Canhan from "../../assets/canhan.png";

export default function CanhanIteam(props) {
  return (
    <View>
      <Image source={Canhan} style={styles.canhan} />
    </View>
  );
}
const styles = StyleSheet.create({
  canhan: {
    position: "absolute",
    left: "352px",
    top: "879.43px",
    width: "46px",
    height: "47.27px",
    background: "url(canhan.png)  no-repeat",
  },
});
