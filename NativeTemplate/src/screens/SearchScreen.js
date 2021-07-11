import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";

const SearchScreen = ({route, navigation}) => {
  
    return (
      <SafeAreaView style={styles.container}>
        <Text>Search</Text>
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default SearchScreen;