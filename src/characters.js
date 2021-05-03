import React, { Component } from "react";
import * as characters from "./characters.json";
import Form from "./form.js";
import Card from "./Card.js";

import { Container, Row, Col, Input } from "reactstrap";

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters.results,
      filter_name: ""
    };
  }

  extractChapters = chapters => {
    let res = [];
    chapters.map((ch, i) => res.push(ch.split("/").slice(-1)[0]));
    return res.join(",");
  };

  addCharacter = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  rmvCharacter = name => {
    let copy = [...this.state.characters];
    let index = -1;
    copy.forEach((ch, i) => {
      if (ch.name === name) {
        index = i;
      }
    });
    if (index !== -1) {
      copy.splice(index, 1);
      this.setState({ characters: copy });
    }
  };

  filterCharacters = e => {
    let value = "";
    if (e.target.value.length >= 3) {
      value = e.target.value;
    }
    this.setState({ filter_name: value });
  };

  render() {
    return (
      <div>
        <Form addCharacter={this.addCharacter} name="Ryck" />
        <br />
        <Input
          onChange={this.filterCharacters}
          placeholder="Filtrar personaje por nombre"
        />
        <br />
        <Container>
          <Row>
            {this.state.characters.map((ch, i) => {
              if (ch.name.includes(this.state.filter_name)) {
                return (
                  <Col>
                    <Card
                      rmvCharacter={this.rmvCharacter}
                      key={i}
                      titulo={ch.name}
                      state={ch.status}
                      gender={ch.gender}
                      chapters={this.extractChapters(ch.episode)}
                      img={ch.image}
                    />
                  </Col>
                );
              } else {
                return;
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
