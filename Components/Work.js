import { Container, Row, Col,Card, Image, CardGroup, Button, Stack } from "react-bootstrap";
import Style from "../styles/Button.module.css";

const Work = () => {
  return (
    <>
    <Container className={'mt-5 p-5'}>
    
    <Row xs={1} sm={2} md={4} className="g-4 justify-content-center">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col style={{width:'18rem mx-auto'}}>
      <Card className='shadow border-0' >
        <Card.Img variant="top" src="https://www.upwork.com/att/download/portfolio/persons/uid/1102624734914351104/profile/projects/files/60ec2cd1-a497-47ea-8566-658935a6115e" />
        <Card.Body>
          <Card.Title>Verifiable Education</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
          </Card.Text>
          <Stack direction={'horizontal'}>
          <Button className={Style.active}>
            Repository
          </Button>
          <Button className={Style.active}>
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
