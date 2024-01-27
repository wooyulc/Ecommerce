import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = 2024;
  return (
    <Footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>BBshop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default Footer