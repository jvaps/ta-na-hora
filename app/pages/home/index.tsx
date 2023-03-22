import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
type Props = {};

function Home({}: Props) {
  return (
    <View style={style.home}>
      <Text>Home</Text>
    </View>
  );
}

const style = StyleSheet.create({
  home: Object.assign(styles.home),
});
export default Home;
