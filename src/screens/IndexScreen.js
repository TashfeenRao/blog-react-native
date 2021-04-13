import React, { useContext } from "react";
import { View, Text } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Hello from Index</Text>
      <Text>{value}</Text>
    </View>
  );
}
