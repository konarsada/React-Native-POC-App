import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GlobalProvider } from "./context/GlobalContext";

import UserItem from "./screens/UserItem";
import ManageUser from "./screens/ManageUser";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {/* List of users */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={UserItem} />
            <Stack.Screen name="ManageUser" component={ManageUser} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 15,
  },
});
