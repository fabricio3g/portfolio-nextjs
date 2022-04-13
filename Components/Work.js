import { Container, Row, Col,Card, Image, CardGroup, Button, Stack } from "react-bootstrap";
import Style from "../styles/Button.module.css";

const Work = () => {
  return (
    <>
    <Container className={'mt-5 p-5'}>
    
    <Row xs={1} sm={2} md={4} className="w-48 g-4 justify-content-center">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col style={{width:'18rem'}} key={idx}>
      <Card className='shadow border-0' >
        <Card.Img variant="top" src="https://socialify.git.ci/fabricio3g/portfolio-nextjs/image?description=1&language=1&name=1&owner=1&theme=Dark" />
        <Card.Body>
          <Card.Title>Verifiable Education</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
          </Card.Text>
          <Stack direction={'horizontal'} className='mt-2'>
          <Button className={Style.btn1}>
            Github
          </Button>
          <Button className={`${Style.btn1} mx-2`} >
            Live
          </Button>
          </Stack>
 
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  </Container>
    </>
  );
};

export default Work;
