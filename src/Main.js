import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";

class Main extends Component {
  render() {
    return (
      <>
        {data.map((animal) => (
          <HornedBeasts
            title={animal.title}
            imageURL={animal.image_url}
            description={animal.description}
            keyword={animal.keyword}
            horns={animal.horns}
          />
        ))}
      </>
    );
  }
}

export default Main;
