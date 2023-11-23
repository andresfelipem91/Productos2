import { TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { CardProduct, TextCard, Boton, Contenier } from "./style";
import React from "react";

interface ProductoCardProps {
  productos: {
    id: string;
    image: string;
    title: string;
    price: number;
  };
}

export default function ProductoCard(props: ProductoCardProps) {
  const { productos } = props;
  const navigation = useNavigation();

  const goToProducto = () => {
    //console.log(`Vamos al producto: ${productos.id}`);
    //console.log(navigation.navigate("Productos"));
    navigation.navigate("Detail", { id: productos.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToProducto}>
      <CardProduct>
        <Card.Cover source={{ uri: productos.image }} />

        <Card.Content>
          <TextCard>${productos.price}</TextCard>
          <View>
            <TextCard>{productos.title}</TextCard>
          </View>

          <Contenier>
            <Boton
              mode="contained"
              onPress={goToProducto}
              buttonColor="#375CA8"
            >
              Detail
            </Boton>
          </Contenier>
        </Card.Content>
      </CardProduct>
    </TouchableWithoutFeedback>
  );
}
