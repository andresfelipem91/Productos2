import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { StyledTextInput, Boton, Image } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useAppTheme } from "../../providers/ThemeProvider";

const Login = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: text,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      navigation.navigate("productos");
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert(
        "Error",
        "Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo."
      );
    }
  };
  return (
    <View>
      <View>
        <Image size={200} source={require("../../assets/login_producto.jpg")} />
      </View>
      <StyledTextInput
        label="Correo Electrónico"
        value={text}
        mode="outlined"
        onChangeText={(text) => setText(text)}
      />
      <StyledTextInput
        label="Contraseña"
        value={password}
        mode="outlined"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <Boton mode="contained" onPress={handleLogin} buttonColor="#375CA8">
        INGRESARS
      </Boton>
    </View>
  );
};

export default Login;
