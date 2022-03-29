import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Bar from "../../assets/bar.png";

export default function BarIteam(props) {
  return (
    <View>
      <Image source={Bar} style={styles.bar} />
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    position: "absolute",
    left: "-8px",
    top: "870.65px",
    width: "442.32px",
    height: "56px",
    background: "url(bar.png)  no-repeat",
  },
});
