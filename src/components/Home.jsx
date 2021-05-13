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
import Hero from "../images/SamaFaceHeader.jpg";
import JumboPic from "../images/JumboTronSama.jpg";
import "../App.css";
import Pic from "../images/prod1.jpg";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
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
               <Container
                  className="bg2 d-flex justify-content-start align-items-center"
                  fluid
               >
                  <Card style={{ width: "18rem" }}>
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           Card Subtitle
                        </Card.Subtitle>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                     </Card.Body>
                  </Card>
               </Container>
               <Container
                  className="bg2 d-flex justify-content-start align-items-center"
                  fluid
               >
                  <Card style={{ width: "18rem" }}>
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           Card Subtitle
                        </Card.Subtitle>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                     </Card.Body>
                  </Card>
               </Container>
               <Container
                  className="bg2 d-flex justify-content-end align-items-center"
                  fluid
               >
                  <Card style={{ width: "18rem" }}>
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           Card Subtitle
                        </Card.Subtitle>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
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

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;
