import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const AddUser = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("ManageUser")}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Add new User</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgreen",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexBasis: 50,
    borderRadius: 20,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default AddUser;
