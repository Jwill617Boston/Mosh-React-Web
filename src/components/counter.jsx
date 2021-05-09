import React, { Component } from "react";
import { Container, Row, Badge, Col } from "react-bootstrap";

class Counter extends Component {
   state = {
      count: 0,
   };

   handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
   };

   render() {
      return (
         <div>
            <Container fluid>
               <Row>
                  <Col>
                     <button
                        variant="primary"
                        onClick={this.handleIncrement}
                        className="btn btn-secondary btn-sm"
                     >
                        Add +1
                        <Badge pill variant="light">
                           {this.formatCount()}
                        </Badge>
                        <span className={this.getBadgeClasses()}></span>
                     </button>
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }

   getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "sr-only";
      return classes;
   }

   formatCount() {
      const { count } = this.state;
      return count === 0 ? "Start" : count;
   }
}

export default Counter;
