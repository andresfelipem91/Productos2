import React, { useState, useEffect } from "react";
import ProductoCard from "./ProductoCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tamanio } from "./style";
import { Searchbar } from "react-native-paper";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearch}
        icon="magnify"
      />
      <Tamanio
        data={filteredData}
        keyExtractor={(data) => data.id}
        numColumns={2}
        renderItem={({ item }) => <ProductoCard productos={item} />}
      />
    </SafeAreaView>
  );
};

export default ProductList;
