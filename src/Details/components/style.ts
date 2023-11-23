import styled from "@emotion/native";
import { Text } from "react-native-paper";

export const RightContainer = styled.View`
 flex-direction: row;
 align-item: flex-end;
 margin-top: 150px;

`
export const ImageProduct = styled.Image`
width: 200px;
height: 300px;
`
export const TextDetail = styled.View`
 flex-direction: column;

`
export const Title = styled(Text)`
overflow: hidden;
max-width: 150px;
font-size: 20px;
text-align: left;
margin: 20px;

`
export const Price = styled.Text`
 font-weight: bold;
 font-size: 20px;
 margin: 50px 0 0 40px;
`