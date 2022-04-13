import {
  Container,
  Button,
  Stack,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";
import TooltipButton from "./TooltipButton";
import { Profile } from "./Profile";
import TextTransition, { presets } from "react-text-transition";
import Style from "../styles/Button.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  SiCsswizardry,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
} from "react-icons/si";

import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../utils/contextTheme";
import {data} from '../test/work'
import Work from "./Work";
export default function Main() {

  const {themeName} = useContext(ThemeContext)


  console.log(data)
  return (
    <>
      <Profile/>
      <Container fluid className="pt-5"  style={{ background: "#272831" }}>
    
        <h3 className="text-center pb-5 text-bold underline wavy text-white" >SKILLS</h3>
        <Container>
          <Row xs={1} md={3} className="pb-5 gap-4 justify-content-center mx-auto">
            <Col>
              <Card className="rounded">
                <Card.Title className="text-center mt-2 pt-1">
                  <b>Languages</b>
                  
                </Card.Title>
                <Card.Body>
                  <Stack
                    direction={"horizontal"}
                    className={"gap-2  justify-content-center"}
                  >
                    <TooltipButton   title={"CSS"}>
                      <SiCsswizardry size={50} color={"#3ea1d6"} />{" "}
                    </TooltipButton>
                    <TooltipButton title={"Typescript"}>
                      <SiTypescript size={50} color={"#1c70c8"} />{" "}
                    </TooltipButton>
                    <TooltipButton title={"JavaScript"}>
                      <SiJavascript
                        title="Javascript"
                        color={"#cbbb19"}
                        size={50}
                      />{" "}
                    </TooltipButton>
                    <TooltipButton title={"Python"}>
                      <SiPython size={50} color={"#29669b"} />
                    </TooltipButton>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto shadow  rounded ">
                <Card.Title className="text-center mt-2 pt-1">
                  Frameworks
                </Card.Title>
                <Card.Body>
                  <Stack
                    direction={"horizontal"}
                    className={"gap-2 justify-content-center"}
                  >
                    <TooltipButton title={"Nest"}>
                      {" "}
                      <SiNestjs size={50} color={"#d5194d"} />
                    </TooltipButton>
                    <TooltipButton title={"Express"}>
                      <SiExpress size={50} color={"#7e7e7e"} />
                    </TooltipButton>
                    <TooltipButton title={"Vue"}>
                      <SiVuedotjs size={50} color={"#47b47d"} />{" "}
                    </TooltipButton>
                    <TooltipButton title={"React"}>
                      <SiReact size={50} color={"#67d2f4"} />
                    </TooltipButton>
                    <TooltipButton title={"Next js"}>
                      <SiNextdotjs size={50} color={"#000000"} />
                    </TooltipButton>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
       
        </Container>
       
      </Container>
     
      <Container fluid  className={`py-5  ${themeName === 'DARK' ? 'bg-gray-0 text-white' : ''}`}>
      <h3 className="text-center text-bold" >LATEST WORKS</h3>

       <Work data={data.slice(0, 4)}/>
       <Container className='d-flex justify-content-center mt-1'>
        <Link className='' href="/portfolio">
            <Button className={`${Style.btn1}`} style={{width:'150px'}}>View More</Button>
        </Link>
        </Container>
      </Container>
      <Container fluid style={{ background: "#272831" }} className="d-flex flex-column pb-5">
        <h3 className="my-4 text-center text-bold underline wavy text-white" >RECENTLY PUBLISHED</h3>
        <Row xs={1} md={4} className="gap-4 justify-content-center mx-auto">
          
          <Col>
            <Card className="mx-auto shadow ">
              <Card.Body>
                <h5>Build web3 aplication</h5>
                <p>
                  react-lazy-load-image-component is used to lazy load React
                  components and images, it boasts of support for intersection
                  observer which determines when an element leaves and enters a
                  viewport and it’s also compatible with server-side rendering
                  (SSR).
                </p>
                <p className="text-muted my-1">12-03-2022</p>
                <br />
                <Button className={`${Style.btn1}`}>Read</Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
        <Container className='d-flex justify-content-center mt-4'>
        <Link className='' passHref href="/blog">
            <Button className={`${Style.btn1}`} style={{width:'150px'}}>View More</Button>
        </Link>
        </Container>
      </Container>
    </>
  );
}
