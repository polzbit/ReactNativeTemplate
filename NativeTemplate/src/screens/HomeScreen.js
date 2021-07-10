import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = ({route, navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home page</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;