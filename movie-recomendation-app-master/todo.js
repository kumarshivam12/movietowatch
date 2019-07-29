import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class ToDo extends Component {
  state =[ 
   
        {
            text: "할일1",
            completed: false
          },
          {
            text: "할일2",
            completed: true
          },
          {
            text: "할일3",
            completed: false
          }
      } 
    ];

  render() {
    return (
      <View style={styles.todoContainer}>
        <TextInput style={styles.input} />
        <ScrollView contentContainerStyle={styles.toDos}>
          {this.state.map(data => (
            <Text>{data.text}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    flex: 6,
    backgroundColor: "white",
    width: width - 25
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});
