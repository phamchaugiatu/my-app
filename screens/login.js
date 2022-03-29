import { View, StyleSheet } from "react-native";
import LogoItem from "../components/login/logo";
import PlcItem from "../components/login/plc";
import AutomationIteam from "../components/login/automation";
import ButtonLoginItem from "../components/login/buttonLogin";

export default function Login(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <LogoItem />
      <PlcItem />
      <AutomationIteam />
      <ButtonLoginItem onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "428px",
    height: "926px",
    backgroundColor: "#E2EDF4",
  },
});
