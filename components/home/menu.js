import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Menu from "../../assets/menu.png";

export default function MenuIteam(props) {
  return (
    <View>
      <Image source={Menu} style={styles.menu} />
    </View>
  );
}
const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    left: "-8px",
    top: "870.65px",
    width: "442.32px",
    height: "56px",
    background: "url(bar.png)  no-repeat",
  },
});
