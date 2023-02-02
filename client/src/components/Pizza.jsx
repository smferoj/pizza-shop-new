import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  // modals

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const addToCartHandler = () => {
   
  // }
  


  return (
    <>
    <Card style={{ width: "18rem", marginTop:"25px" }}>
        <Card.Img variant="top"
          src={pizza.image}
          style={{ height: "220px", crusor:"pointer" }}
          onClick={handleShow}
        />
      <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <hr/>
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6> Varients</h6>
              <select value={varient} onChange={(e) => setVarient(e.target.value)}>
                {pizza.varients.map((varient) => (
                  <option>
                    {varient}
                  </option>
                ))}
              </select>
            </Col>
            <Col md={6}>
              <h6> Quantity</h6>
              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v, i) => (
                  <option
                   value={i + 1} 
                  >
                    {i + 1}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}> Price: {pizza.prices[0][varient] *quantity} /- </Col>
            <Col md={6}>
            <Button 
            // <Button onClick={addToCartHandler}
                className="bg-dark text-white">Add to Cart</Button>
                  </Col>
        </Row>
      
      </Card.Body>
    </Card>
      {/* Modal */}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img variant="top"
          src={pizza.image}
          style={{ height: "220px" }}
            />
          </div>
          <div>
            <h5> Description: </h5>
            <h6> {pizza.description}</h6>
        </div>
        </Modal.Body>
      
      </Modal>
    </>
  );
};

export default Pizza;

// when click on image (line -25) setshow is true that means {show) is true and handle close will be false 