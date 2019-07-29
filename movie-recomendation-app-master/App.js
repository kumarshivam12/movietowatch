import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Movie from "./movie.js";
import ToDo from "./todo.js";

const { height, width } = Dimensions.get("window");
export default class App extends Component {
  componentDidMount() {
    console.log(this.state);
  }
  state = {
    isMovie: false,
    isToDo: false,
    isHome: true
  };

  // componentWillMount() {
  //   this.setState({
  //     isMovie : true
  //   })
  // }

  onPressMovie = () => {
    this.setState({
      isMovie: true,
      isToDo: false,
      isHome: false
    });
  };

  onPressToDo = () => {
    this.setState({
      isToDo: true,
      isMovie: false,
      isHome: false
    });
  };

  onHome = () => {
    this.setState({
      isMovie: false,
      isToDo: false,
      isHome: true
    });
  };

  selectChannel = () => {
    if (isMovie) {
      return <Movie />;
    } else if (isToDo) {
      return <isToDo />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 2 }} onPress={this.onHome}>
          <Text style={styles.header}>어플리케이션</Text>
        </TouchableOpacity>
        <View style={styles.nav}>
          <TouchableOpacity
            style={this.state.isMovie ? styles.navTabTwo : styles.navTabOne}
            onPress={this.onPressMovie}
          >
            <Text
              style={this.state.isMovie ? styles.navActiveText : styles.navText}
            >
              영화
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.isToDo ? styles.navTabTwo : styles.navTabOne}
            onPress={this.onPressToDo}
          >
            <Text
              style={this.state.isToDo ? styles.navActiveText : styles.navText}
            >
              ToDo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTabOne}>
            <Text style={styles.navText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTabOne}>
            <Text style={styles.navText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTabOne}>
            <Text style={styles.navText}>5</Text>
          </TouchableOpacity>
        </View>
        {!this.state.isMovie && !this.state.isToDo ? (
          <View style={{ flex: 6 }}>
            <Text>항목을 클릭해 주세요!</Text>
          </View>
        ) : null}
        {this.state.isMovie ? <Movie /> : null}
        {this.state.isToDo ? <ToDo /> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FF9FED"
  },
  header: {
    flex: 2,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  },
  nav: {
    flex: 1,
    flexDirection: "row",
    width: width - 25
  },
  navTabOne: {
    flex: 1,
    backgroundColor: "black",
    opacity: 1,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  navTabTwo: {
    flex: 1,
    backgroundColor: "white",
    opacity: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  navText: {
    flex: 1,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  navActiveText: {
    flex: 1,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});

// {movie.genres}{movie.synopsis}
