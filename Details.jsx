import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles.jsx";
export const Details = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.txt}>Details PAGE WORKED</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.txt2}>Go To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Camera");
        }}
      >
        <Text style={styles.txt2}>Go To Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ImgPicker");
        }}
      >
        <Text style={styles.txt2}>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
};
