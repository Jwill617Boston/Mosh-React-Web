import React, { Component, useState } from "react";
import {
   Toast,
   Row,
   Col,
   Card,
   Button,
   Navbar,
   Nav,
   NavDropdown,
   Form,
   FormControl,
   Popover,
   OverlayTrigger,
   Container,
   Figure,
} from "react-bootstrap";
import Face1 from "../images/SamaFace.jpg";
import Bod1 from "../images/Samabody1.jpg";
import Bod2 from "../images/samabody2.jpg";
import Back1 from "../images/samaback.jpg";
import Counter from "./Counter";

class Movies extends Component {
   constructor(props) {
      super(props);
      this.state = {
         toast: "I am changing what is being said",
      };
   }

   render() {
      const popover = (
         <Popover id="popover-basic">
            <Popover.Title as="h3">Some Shit to the Right</Popover.Title>
            <Popover.Content>
               And here's some <strong>Cool Shit </strong> content. It's very
               engaging. right?
            </Popover.Content>
         </Popover>
      );
      // Button Control
      const Example2 = () => (
         <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">Press this Button</Button>
         </OverlayTrigger>
      );

      function Example() {
         const [show, setShow] = useState(false);

         return (
            <Row>
               <Col xs={6}>
                  <Toast
                     onClose={() => setShow(false)}
                     show={show}
                     delay={1000}
                     autohide
                  >
                     <Toast.Header>
                        <img
                           src="holder.js/20x20?text=%20"
                           className="rounded mr-2"
                           alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                     </Toast.Header>
                     <Toast.Body>{"toast"}</Toast.Body>
                  </Toast>
               </Col>
               <Col xs={6}>
                  <Button
                     onClick={() => setShow(true)}
                     variant="primary"
                     size="lg"
                     block
                  >
                     Option 1
                  </Button>
               </Col>
            </Row>
         );
      }

      return (
         <>
            <Container fluid>
               <Navbar bg="light" expand="lg" sticky="top">
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                           <NavDropdown.Item href="#action/3.1">
                              Action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.2">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.3">
                              Another Something Here
                           </NavDropdown.Item>
                           <NavDropdown.Divider />
                           <NavDropdown.Item href="#action/3.4">
                              Something Here
                           </NavDropdown.Item>
                        </NavDropdown>
                     </Nav>
                     <Form inline>
                        <FormControl
                           type="text"
                           placeholder="Search Item"
                           className="mr-sm-2"
                        />
                        <Button variant="outline-success">Search</Button>
                     </Form>
                  </Navbar.Collapse>
               </Navbar>
            </Container>
            <Container fluid>
               <Row className="justfy-content-center">Text</Row>
               <Row>
                  {/* Card One */}
                  <Card style={{ width: "18rem" }}>
                     <Card.Img variant="top" src={Face1} />
                     <Card.Body>
                        <Card.Title>
                           <Example2 />{" "}
                        </Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Toast>
                           <Toast.Header>
                              <img
                                 src="holder.js/20x20?text=%20"
                                 className="rounded mr-2"
                                 alt=""
                              />
                              <strong className="mr-auto">Bootstrap</strong>
                              <small>just now</small>
                           </Toast.Header>
                           <Toast.Body>See? Just like this.</Toast.Body>
                        </Toast>
                        <Toast>
                           <Toast.Header>
                              <img
                                 src="holder.js/20x20?text=%20"
                                 className="rounded mr-2"
                                 alt=""
                              />
                              <strong className="mr-auto">Bootstrap</strong>
                              <small>2 seconds ago</small>
                           </Toast.Header>
                           <Toast.Body>
                              Heads up, toasts will stack automatically
                           </Toast.Body>
                        </Toast>
                     </Card.Body>
                  </Card>
                  {/* Card two */}
                  <Card style={{ width: "18rem" }}>
                     <Card.Img variant="top" src={Face1} />
                     <Card.Body>
                        <Card.Title>
                           <Example2 />{" "}
                        </Card.Title>
                        <Card.Text>I can add anything to this place</Card.Text>
                     </Card.Body>
                  </Card>
                  {/* Card three */}
                  <Card style={{ width: "18rem" }}>
                     <Card.Img variant="top" src={Face1} />
                     <Card.Body>
                        <Card.Title>
                           <Example2 />{" "}
                        </Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Toast>
                           <Toast.Header>
                              <img
                                 src="holder.js/20x20?text=%20"
                                 className="rounded mr-2"
                                 alt=""
                              />
                              <strong className="mr-auto">Bootstrap</strong>
                              <small>just now</small>
                           </Toast.Header>
                           <Toast.Body>See? Just like this.</Toast.Body>
                        </Toast>
                        <Toast>
                           <Toast.Header>
                              <img
                                 src="holder.js/20x20?text=%20"
                                 className="rounded mr-2"
                                 alt=""
                              />
                              <strong className="mr-auto">Bootstrap</strong>
                              <small>2 seconds ago</small>
                           </Toast.Header>
                           <Toast.Body>
                              Heads up, toasts will stack automatically
                           </Toast.Body>
                        </Toast>
                     </Card.Body>
                  </Card>
                  {/* Card four */}
                  <Card style={{ width: "18rem" }}>
                     <Card.Img variant="top" src={Face1} />
                     <Card.Body>
                        <Card.Title>
                           <Example2 />{" "}
                        </Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Row>
               <Row>
                  <Figure>
                     <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Bod1}
                     />
                     <Figure.Caption>Strength Band</Figure.Caption>
                  </Figure>
                  <Figure>
                     <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Bod2}
                     />
                     <Figure.Caption>Power Bands</Figure.Caption>
                  </Figure>
                  <Figure>
                     <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Back1}
                     />
                     <Figure.Caption>Great Product</Figure.Caption>
                  </Figure>
               </Row>
            </Container>
         </>
      );
   }
}

export default Movies;
