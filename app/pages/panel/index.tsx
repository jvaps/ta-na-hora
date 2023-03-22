import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
type Props = {};

function Panel({}: Props) {
  return (
    <View style={style.panel}>
      <Text>Panel</Text>
    </View>
  );
}

const style = StyleSheet.create({
  panel: Object.assign(styles.panel),
});
export default Panel;
