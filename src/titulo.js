import React, { Component } from "react";
import "/src/css/title.css";

export default class Titulo extends Component {
  componentDidMount() {
    this.props.setApp("FOCKKKK");
  }
  render() {
    return (
      <div className="rym">
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}
