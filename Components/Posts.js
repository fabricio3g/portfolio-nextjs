import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Style from "../styles/Button.module.css";

import Link from "next/link"

const Posts = ()=> {
    
    return(
    <Container className=' p-4' fluid style={{ marginTop:'8rem !important'} } >
    <h3 className='text-center my-4 text-white'>Posts</h3>
    <Row xs={1} md={4} className="gap-4 justify-content-center mx-auto mt-5">
      <Col>
        <Card className="mx-auto shadow ">
        <Card.Body>
          <h5>Build web3 aplication</h5>
          <p>react-lazy-load-image-component is used to lazy load React components and images, it boasts of support for intersection observer which determines when an element leaves and enters a viewport and it’s also compatible with server-side rendering (SSR).</p>
          <p className="text-muted my-1">12-03-2022</p>
          <br/>
          <Button className={`${Style.btn1}`}>
            Read
          </Button>
        </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto shadow ">
        <Card.Body>
          <h5>Build web3 aplication</h5>
          <p>react-lazy-load-i and enters a viewport and it’s also compatible with server-side rendering (SSR).</p>
          <p className="text-muted my-1">12-03-2022</p>
          <br/>
          <Button className={`${Style.btn1}`}>
            Read
          </Button>
        </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto shadow ">
        <Card.Body>
          <h5>Build web3 aplication</h5>
          <p>react-lazy-load-image-component is used to lazy load React components and images, it boasts of support for intersection observer which determines when an element leaves and enters a viewport and it’s also compatible with server-side rendering (SSR).</p>
          <p className="text-muted my-1">12-03-2022</p>
          <br/>
          <Button className={`${Style.btn1}`}>
            Read
          </Button>
        </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto shadow ">
        <Card.Body>
          <h5>Build web3 aplication</h5>
          <p>react-lazy-load-image-component is used to lazy load React components and images, it boasts of support for intersection observer which determines when an element leaves and enters a viewport and it’s also compatible with server-side rendering (SSR).</p>
          <p className="text-muted my-1">12-03-2022</p>
          <br/>
          <Button className={`${Style.btn1}`}>
            Read
          </Button>
        </Card.Body>
        </Card>
      </Col>
    </Row>
  
  </Container>
    )
}

export default Posts