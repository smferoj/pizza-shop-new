import React from 'react';
import{Row, Col, Container} from 'react-bootstrap'

const About = () => {
  return (
      <>
          <Container style={{ marginTop: '50px' }}>
              <h1> Welcome we are</h1> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis molestiae tempore quisquam harum saepe qui repudiandae modi explicabo quos veritatis?</p>
              <h1> Our Speciality</h1>
              <Row>
                  <Col md={6}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate rem, quibusdam dicta culpa voluptas et deserunt officiis, quis veritatis minima, reiciendis vero eos exercitationem! Fugit, veniam ipsum magnam eos voluptates laudantium exercitationem temporibus quaerat adipisci enim, nemo aliquam distinctio! Exercitationem earum facere fugit quasi laborum, numquam voluptates similique aliquid!</p>
                  </Col>
                  <Col md={6}>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium laudantium quo culpa vel nihil ratione nulla mollitia repellat non exercitationem quod doloremque obcaecati harum nesciunt cupiditate atque omnis placeat quos accusamus, reiciendis quas dolorum illo? Non iste aut totam voluptatem animi harum quidem doloremque facilis cumque eius, soluta velit.</p>
                  </Col>
              </Row>
              <Row>
                  <h1> Our Cheif</h1>
                  <Col md={3}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate quidem beatae, iure repudiandae itaque, qui, dignissimos aut sit fugiat atque ullam quia consectetur.
                  </Col>
                  <Col md={3}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate quidem beatae, iure repudiandae itaque, qui, dignissimos aut sit fugiat atque ullam quia consectetur.
                  </Col>
                  <Col md={3}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate quidem beatae, iure repudiandae itaque, qui, dignissimos aut sit fugiat atque ullam quia consectetur.
                  </Col>
                  <Col md={3}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate quidem beatae, iure repudiandae itaque, qui, dignissimos aut sit fugiat atque ullam quia consectetur.
                  </Col>
              </Row>

        </Container>
          
     </>
  )
}

export default About