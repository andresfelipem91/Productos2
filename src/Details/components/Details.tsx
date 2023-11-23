import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, List } from "react-native-paper";
import { ScrollView, View } from "react-native";
import {
  RightContainer,
  ImageProduct,
  TextDetail,
  Title,
  Price,
} from "./style";

export default function Producto(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    route: { params },
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const productData = await response.json();
        setData(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);
  if (loading) {
    return <ActivityIndicator animating={true} />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView>
      <RightContainer>
        <View>
          <ImageProduct source={{ uri: data.image }} />
        </View>
        <TextDetail>
          <View>
            <Title>{data.title}</Title>
          </View>

          <Price>${data.price}</Price>
        </TextDetail>
      </RightContainer>
      <List.Section>
        <List.Accordion title="Descripción">
          <List.Item
            title={data.description}
            titleNumberOfLines={9}
            style={{ overflow: "hidden", alignItems: "center" }}
          />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}
