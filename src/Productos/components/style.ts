import styled from "@emotion/native";
import { FlatList } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";

export const Tamanio = styled(FlatList)`

`
export const CardProduct = styled(Card)`
    flex: 1px;
    width: 320px;
    height: 410px;
    flex-shrink: 0;
    margin: 10px;
    backgroundColor: #fff;`
export const TextCard = styled.Text`
margin: 10px;
`
export const Boton = styled(Button)`
  margin: 2px;
`;
export const Contenier = styled.View`
 margin: 10px;
`
export const Campo = styled(TextInput)`
background-color: #ccc;
`