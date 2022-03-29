import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Plc from "../../assets/plc.png";

export default function PlcItem(props) {
  return (
    <View>
      <Image source={Plc} style={styles.plc} />
    </View>
  );
}
const styles = StyleSheet.create({
  plc: {
    position: "absolute",
    left: "6px",
    top: "209.15px",
    width: "415px",
    height: "258.77px",
    background: "url(plc.png)  no-repeat",
  },
});
