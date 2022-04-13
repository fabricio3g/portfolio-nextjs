import { Container, Row, Col,Card, Image, CardGroup, Button, Stack } from "react-bootstrap";
import Style from "../styles/Button.module.css";

const Work = ({data}) => {
  return (
    <>
    <Container className={'mt-5 p-5'}>
    
    <Row xs={1} sm={2} md={4} className="w-48 g-4 justify-content-center">
  {data.map((d, idx) => (
    <Col style={{width:'18rem'}} key={idx}>
      <Card className='shadow border' >
        <Card.Img className="border rounded" variant="top" src={d.img} />
        <Card.Body>
          <Card.Title>{d.title}</Card.Title>
          <Card.Text className="text-muted">
            {d.description}
          </Card.Text>
          <Stack direction={'horizontal'} className='mt-2'>
          {
          d.github === ''? (''): 
          (<Button as="a" href={d.github} target='_blink' className={Style.btn1}>
            Github
          </Button>)
          }
          {d.live === '' ? (''): (
            <Button as="a" href={d.live} target='_blink' className={`${Style.btn1} mx-2`} >
            Live
          </Button>
          )}
          {
            d.live === '' && d.github === '' && (
              <Button disabled target='_blink' className={`mx-auto bg-black border mx-2`} >
              Code not available
              </Button>
            )
          }
          
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
