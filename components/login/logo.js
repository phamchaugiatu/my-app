import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Logo from "../../assets/logo.png";

export default function LogoItem(props) {
  return (
    <View>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    left: "152px",
    top: "44.62px",
    width: "122px",
    height: "145.38px",
    background: "url(logo.png)  no-repeat",
  },
});
