import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import { useState } from "react";
import * as Random from "expo-random";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ManageUser = ({ route, navigation }) => {
  const { setData } = useContext(GlobalContext);

  const [userData, setUserData] = useState({
    name: route.params?.name || "",
    email: route.params?.email || "",
    id: route.params?.id || Random.getRandomBytes(1)[0],
  });

  function handleNameChange(event) {
    setUserData((prevState) => ({
      ...prevState,
      name: event,
    }));
  }

  function handleEmailChange(event) {
    setUserData((prevState) => ({
      ...prevState,
      email: event,
    }));
  }

  function handleSubmit() {
    setData((prevData) =>
      route.params
        ? prevData.map((item) =>
            item.id === userData.id
              ? { ...item, name: userData.name, email: userData.email }
              : item
          )
        : [...prevData, userData]
    );
    navigation.navigate("Home");
  }

  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          autoCorrect="false"
          autoCapitalize="none"
          style={styles.input}
          placeholder="Enter Name"
          name="name"
          value={userData.name}
          onChangeText={handleNameChange}
        />
        <TextInput
          autoCorrect="false"
          autoCapitalize="none"
          style={styles.input}
          placeholder="Enter Email"
          name="email"
          value={userData.email}
          onChangeText={handleEmailChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              Confirm
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: "lightgreen",
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
});

export default ManageUser;
