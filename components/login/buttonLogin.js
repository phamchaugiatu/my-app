import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Login from "../../assets/login.png";

export default function ButtonLoginItem(props) {
  return (
    <View>
      <Image source={Login} style={styles.login} />
    </View>
  );
}
const styles = StyleSheet.create({
  login: {
    position: "absolute",
    left: "65px",
    top: "701px",
    width: "297px",
    height: "48.2px",
    background: "url(login.png)  no-repeat",
  },
});
