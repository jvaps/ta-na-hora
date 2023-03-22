import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
type Props = {};

function Activities({}: Props) {
  return (
    <View style={style.activities}>
      <Text>Atividades</Text>
    </View>
  );
}

const style = StyleSheet.create({
  activities: Object.assign(styles.activities),
});
export default Activities;
