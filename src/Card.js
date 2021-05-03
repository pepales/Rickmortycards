import React, { Component } from "react";
import "/src/css/card.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faHeart,
  faQuestion,
  faMale,
  faFemale
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

library.add(faSkull, faHeart, faQuestion, faMale, faFemale);

export default class ChaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters,
      app: "FOFOFOFO"
    };
  }
  setApp = param => {
    this.setState({ app: param });
  };
  kill = (param, e) => {
    this.setState({ state: e.target.value });
  };
  rmvCharacter = e => {
    this.props.rmvCharacter(this.props.titulo);
  };
  render() {
    let icon_name = "";
    let icon_gender = "";
    switch (this.state.state) {
      case "Alive":
        icon_name = "heart";
        break;
      case "Dead":
        icon_name = "skull";
        break;
      default:
        icon_name = "question";
        break;
    }

    switch (this.props.gender) {
      case "Male":
        icon_gender = "male";
        break;
      case "Female":
        icon_gender = "female";
        break;
      default:
        icon_gender = "question";
        break;
    }

    return (
      <div>
        <Card style={{ height: "auto" }}>
          <CardImg width="100%" top src={this.props.img} />
          <CardBody>
            <CardTitle>{this.props.titulo}</CardTitle>
            <CardSubtitle>
              <FontAwesomeIcon icon={icon_name} />
            </CardSubtitle>
            <CardSubtitle>
              <FontAwesomeIcon icon={icon_gender} />
            </CardSubtitle>
            <CardText>{this.state.chapters}</CardText>
          </CardBody>
          <Button onClick={this.rmvCharacter}>Eliminar</Button>
        </Card>
      </div>
    );
  }
}
