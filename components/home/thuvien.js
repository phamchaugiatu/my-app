import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Thuvien from "../../assets/thuvien.png";

export default function ThuvienIteam(props) {
  return (
    <View>
      <Image source={Thuvien} style={styles.thuvien} />
    </View>
  );
}
const styles = StyleSheet.create({
  thuvien: {
    position: "absolute",
    left: "98px",
    top: "885.07px",
    width: "54px",
    height: "40.03px",
    background: "url(thuvien.png)  no-repeat",
  },
});
