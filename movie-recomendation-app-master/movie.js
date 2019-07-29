import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class Movie extends Component {
  state = {};

  componentDidMount() {
    this._getMovie();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <View key={movie.id} style={{ marginBottom: 5 }}>
          <Text style={styles.text}>{movie.title_english}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                style={styles.poster}
                source={{ uri: movie.medium_cover_image }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>Genres : {movie.genres}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 5 }}>{movie.synopsis}</Text>
        </View>
      );
    });
    return movies;
  };

  _getMovie = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.lt/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  render() {
    return (
      <View style={{ flex: 6 }}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContents}
        >
          {this.state.movies ? (
            this._renderMovies()
          ) : (
            <Text style={styles.text}>Loading</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 2,
    backgroundColor: "white",
    width: width - 25
  },
  scrollContents: {
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5
  },
  poster: {
    alignItems: "center",
    height: 150,
    width: 100
  }
});
