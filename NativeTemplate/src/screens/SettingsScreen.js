import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SettingsScreen = ({route, navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
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

export default SettingsScreen;