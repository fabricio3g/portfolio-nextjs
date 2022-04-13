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
import TextTransition, { presets } from "react-text-transition";
import Style from "../styles/Button.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  SiUpwork,
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
import { VscLocation } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "../utils/contextTheme";
import {data} from '../test/work'
import Work from "./Work";
export default function Main() {
  const TEXTS = [
    "Web Devolper",
    "Full Stack Dev",
    "Freelancer",
    "Mate Drinker",
  ];
  const {themeName} = useContext(ThemeContext)

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );

    return () => clearTimeout(intervalId);
  }, []);
  console.log(data)
  return (
    <>
      <Container
        fluid
        style={{ paddingTop: "7rem", }}
        className={`d-flex flex-nowrap justify-content-center ${themeName === 'DARK' ? 'bg-svg-black ' : 'bg-svg'}`}
      > 
        <Row className="p-2 mb-5 shadow border rounded mx-auto gap-1 bg-white">
          <Col>
            <h2 className="">
              <span>I&apos;m Fabricio.</span>
            </h2>
            <h6>
              <b className="" style={{color:'#3aa19d'}}>
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.gentle}
                />
              </b>
            </h6>
            <div>
              <VscLocation  size={22} />
              <b  >Argentina</b>
            </div>
            <br />
            <Stack direction="horizontal" className="pt-1 mb-3 gap-3">
              <a
                target={"_blank"}
                href="https://github.com/fabricio3g"
                rel="noreferrer"
              >
                <TooltipButton title={"Github"}>
                  <AiFillGithub size={20} color={ '#212529'} />
                </TooltipButton>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/fabricio3g"
                rel="noreferrer"
              >
                <TooltipButton title={"Linkedin"}>
                  <AiFillLinkedin size={20} color={ '#212529'}/>
                </TooltipButton>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/fabricio3g"
                rel="noreferrer"
              >
                <TooltipButton title={"Twitter"}>
                  <AiFillTwitterCircle size={20} color={ '#212529'} />
                </TooltipButton>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/fabricio3g"
                rel="noreferrer"
              >
                <TooltipButton title={"UpWork"}>
                  <SiUpwork size={20} color={ '#212529'}/>
                </TooltipButton>
              </a>
            </Stack>

            <Button className={Style.btn1} >Download CV</Button>
          </Col>
          <Col>
            <Image
              alt="avatar"
              className="rounded-circle shadow "
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFSTGYCrlFFtA/profile-displayphoto-shrink_800_800/0/1638233773279?e=1653523200&v=beta&t=YGUvtuX7m8r4ev1aErJ9Yc303UrJxJfYc8LfJkYg0Pg"
              style={{ width: "150px", border: "5px outset #c7cbae" }}
            />
          </Col>
        </Row>
      </Container>
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
      <h3 className="text-center text-bold" >LATEST WORK</h3>

       <Work/>
       <Container className='d-flex justify-content-center mt-1'>
        <Link className='' href="/porfolio">
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
        <Link className='' href="/blog">
            <Button className={`${Style.btn1}`} style={{width:'150px'}}>View More</Button>
        </Link>
        </Container>
      </Container>
    </>
  );
}
