import Login from "./src/login/components/login";
import {
  NavigationContainer,
  DefaultTheme,
  //DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./src/Productos/components/ProductList";
import Detail from "./src/Details/components/Details";
import { adaptNavigationTheme, useTheme } from "react-native-paper";
import { light } from "./src/theme/light";
import { View, useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "rgb(55, 168, 103)",
//   },
// };
DefaultTheme.colors.primary = "blue";
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: DefaultTheme,
});
//console.log(MyTheme);
export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="productos" component={ProductList} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
