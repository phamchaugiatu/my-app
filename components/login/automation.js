import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Automation from "../../assets/automation.png";

export default function AutomationIteam(props) {
  return (
    <View>
      <Image source={Automation} style={styles.automation} />
    </View>
  );
}
const styles = StyleSheet.create({
  automation: {
    position: "absolute",
    left: "12.72px",
    top: "467.97px",
    width: "402.28px",
    height: "138.43px",
    background: "url(automation.png)  no-repeat",
  },
});
