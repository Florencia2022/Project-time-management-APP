import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hola, mundo!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
