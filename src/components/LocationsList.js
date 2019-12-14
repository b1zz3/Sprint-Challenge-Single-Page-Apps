import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export default function LocationsList() {
const [ locations, setLocations ] = useState([]);
useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/location/")
    .then( res => {
      setLocations(res.data.results);
      console.log("axios", res.data.results);
    })
    .catch(err => console.log(err.response));

}, []);
console.log("locs", locations);
return (
  <section className="location-list">
    {locations.map(loc => {
      return (
        <Link to="/">
          <Col sm="8" key="{loc.id}">
            <Card body>
              <CardTitle>{loc.name}</CardTitle>
            </Card>
          </Col>
        </Link>
      );
    })}
  </section>
);
}