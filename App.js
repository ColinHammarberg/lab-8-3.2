import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const Task3 = () => {
  const [word1, inputWord1] = React.useState("");
  const [word2, inputWord2] = React.useState("");

  function isSame() {
    return Alert.alert(word1 === word2 ? "Same!" : "Not Same!");
  }

  /* Old version
  function lenCompare() {
    if (word1.length > word2.length) {
      return Alert.alert('First Word is Longer');
    } 
    else if (word1.length < word2.length) {
      return Alert.alert('Second Word is Longer');
    }
    else {
      return Alert.alert('Same Length');
    }
  }*/

  function lenCompare() {
    if (word1.length != word2.length) {
      return Alert.alert(
        word1.length > word2.length
          ? "First Word is Longer"
          : "Second Word is Longer"
      );
    }
    return Alert.alert("Same Length");
  }

  function isInclude() {
    if (word1.includes(word2) && !word2.includes(word1)) {
      return Alert.alert("Second Word is a substring of First Word");
    } else if (word2.includes(word1) && !word1.includes(word2)) {
      return Alert.alert("First Word is a substring of Second Word");
    } else if (word2.includes(word1) && word1.includes(word2)) {
      return Alert.alert("They are same");
    } else {
      return Alert.alert("They are different");
    }
  }

  return (
    <View style={styles.container}>
      <Text> Word Game</Text>
      <TextInput
        style={styles.input}
        onChangeText={(word1) => inputWord1(word1)}
        placeholder="Enter a word"
      />
      <TextInput
        style={styles.input}
        onChangeText={(word2) => inputWord2(word2)}
        placeholder="Enter a word"
      />
      <Button title="Same?" color="blue" onPress={isSame} />
      <Button title="Length Comparison" color="blue" onPress={lenCompare} />
      <Button title="Include?" color="blue" onPress={isInclude} />
    </View>
  );
};
export default Task3;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
