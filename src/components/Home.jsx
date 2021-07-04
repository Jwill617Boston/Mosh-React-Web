import React from "react";
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
import "../App.css";
import { Router, Route, Switch } from "react-router";


class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div>
            <div>
               <Navbar bg="dark" variant="dark"></Navbar>
               <Container className="bg d-flex justify-content-start align-items-center" fluid>
                  <Card style={{ width: "18rem" }}>
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           Card Subtitle
                        </Card.Subtitle>
                        <Card.Text>This is the Text</Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                     </Card.Body>
                  </Card>
               </Container>               
            </div>
         </div>
      );
   }
}

export default Home;
