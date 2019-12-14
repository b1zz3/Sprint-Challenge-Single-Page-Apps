import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
  const [ characters, setCharacters ] = useState([]);
  
  useEffect(() => {
    const id = props.match.param.id;

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then( res => {
        setCharacters(res.data.results);
        console.log("axios", res.data.results);
      })
      .catch(err => console.log(err.response));
  }, []);
  return (
    <section className="character-card">
      {characters.map(char => {
        return (
          <Col sm="8" key={char.id}>
            <Card body>
              <CardTitle>{char.name}</CardTitle>
              <CardBody>
                <CardText>{char.status}</CardText>
                <CardText>{char.species}</CardText>
                <CardText>{char.type}</CardText>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </section>
  );
}
