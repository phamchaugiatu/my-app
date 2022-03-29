import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Hoatdong from "../../assets/hoatdong.png";

export default function HoatdongIteam(props) {
  return (
    <View>
      <Image source={Hoatdong} style={styles.hoatdong} />
    </View>
  );
}
const styles = StyleSheet.create({
  hoatdong: {
    position: "absolute",
    left: "264px",
    top: "878.9px",
    width: "59px",
    height: "47.2px",
    background: "url(hoatdong.png)  no-repeat",
  },
});
