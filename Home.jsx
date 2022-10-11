import { View } from "react-native";
import { Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles.jsx";

export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.txt}>HOME PAGE WORKED</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <Text style={styles.txt2}>Go To Details</Text>
      </TouchableOpacity>
    </View>
  );
};
