import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Login from "../../assets/login.png";

export default function ButtonLoginItem(props) {
  const { onPress } = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={Login} style={styles.login} />
      </TouchableOpacity>
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
