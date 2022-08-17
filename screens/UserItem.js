import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AddUser from "../components/AddUser";

const UserItem = ({ navigation }) => {
  const { data, removeUser, editUser } = useContext(GlobalContext);

  return (
    <View>
      <View style={styles.addBtn}>
        <AddUser navigation={navigation} />
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text>
                <Text style={styles.customLabel}>Name: </Text>
                {item.name}
              </Text>
              <Text>
                <Text style={styles.customLabel}>Email: </Text>
                {item.email}
              </Text>
              <TouchableOpacity
                style={styles.edit}
                onPress={() => editUser(item.id, navigation)}
              >
                <Text style={{ color: "green", fontWeight: "bold" }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => removeUser(item.id)}
              >
                <Text style={{ color: "red", fontWeight: "bold" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    backgroundColor: "lightblue",
    marginBottom: 5,
    borderRadius: 10,
  },
  customLabel: {
    fontSize: "15",
    fontWeight: "bold",
  },
  edit: {
    width: 50,
    position: "absolute",
    top: 0,
    right: 0,
  },
  delete: {
    width: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  addBtn: {
    marginTop: 5,
    marginBottom: 10,
  },
});

export default UserItem;
