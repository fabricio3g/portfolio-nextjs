import { Container, Row, Col,Card, Image, CardGroup, Button, Stack } from "react-bootstrap";
import Style from "../styles/Button.module.css";

const Work = ({data}) => {
  return (
    <>
    <Container className={'mt-5 p-5'}>
    
    <Row xs={1} sm={2} md={4} className="w-48 g-4 justify-content-center">
  {data.map((d, idx) => (
    <Col style={{width:'18rem'}} key={idx}>
      <Card className='shadow border-0' >
        <Card.Img variant="top" src="https://socialify.git.ci/fabricio3g/portfolio-nextjs/image?description=1&language=1&name=1&owner=1&theme=Dark" />
        <Card.Body>
          <Card.Title>{d.title}</Card.Title>
          <Card.Text>
            {d.description}
          </Card.Text>
          <Stack direction={'horizontal'} className='mt-2'>
          <Button as="a" href={d.github} target='_blink' className={Style.btn1}>
            Github
          </Button>
          <Button as="a" href={d.live} target='_blink' className={`${Style.btn1} mx-2`} >
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
