import React from "react";
import { Container, Row, Col, Table,  } from "react-bootstrap";
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';


const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Teciffo YT Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exercitationem officia blanditiis aperiam cum reprehenderit
              reiciendis. Modi nostrum similique nisi quam quasi quaerat fuga
              dignissimos dolores dolor fugit, recusandae dolore delectus quos
              adipisci tempore quis iste culpa cumque facere provident? Rem nam
              ea aliquid reiciendis? Nisi esse quaerat quas dolore?
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>....Contact Details.......
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall/>
                  </td>
                  <td>Phone</td>
                  <td>01724703700</td>
                 
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail/>
                  </td>
                  <td>Email</td>
                  <td>sm.feroj@gmail.com</td>     
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <div className="front-img">
            
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
