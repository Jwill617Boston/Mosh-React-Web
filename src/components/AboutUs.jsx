import React, { Component } from "react";
import {
   Container,
   Image,
   Jumbotron,
   Button,
   Navbar,
   Card,
   Row,
   Col,
} from "react-bootstrap";
import Hero from "../images/SamaFaceHeader.jpg";
import JumboPic from "../images/JumboTronSama.jpg";
import "../App.css";
import Pic from "../images/prod1.jpg";

export class AboutUs extends Component {
   render() {
      return (
         <Card style={{ width: "18rem" }}>
            <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
               </Card.Subtitle>
               <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
               </Card.Text>
               <Card.Link href="#">Card Link</Card.Link>
               <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
         </Card>
      );
   }
}

export default AboutUs;
