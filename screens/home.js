import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import BarIteam from "../components/home/bar";
import NenHomeIteam from "../components/home/nenhome";
import TrangchuIteam from "../components/home/trangchu";
import NguonIteam from "../components/home/nguon";
import ThuvienIteam from "../components/home/thuvien";
import HoatdongIteam from "../components/home/hoatdong";
import Canhan from "../components/home/canhan";

export default function Login(props) {
  return (
    <View style={styles.home}>
      <NenHomeIteam />
      <BarIteam />
      <TrangchuIteam />
      <NguonIteam />
      <ThuvienIteam />
      <HoatdongIteam />
      <Canhan />
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "428px",
    height: "926px",
    background: "#FFFFFF",
  },
});
