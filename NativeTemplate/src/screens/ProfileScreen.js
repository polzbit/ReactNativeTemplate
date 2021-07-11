import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";

const ProfileScreen = ({route, navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
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
export default ProfileScreen;