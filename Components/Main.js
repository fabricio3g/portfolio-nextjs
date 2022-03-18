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
  SiNextdotjs
} from "react-icons/si";
import { VscLocation } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Main() {
  const TEXTS = [
    "Web Devolper",
    "🧉",
    "Full Stack Dev",
    "Freelancer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="justify-content-md-center" xs={2} md={3} lg={3}>
          <Col>
            <h2 className="mb-3">
              <span>I&apos;m Fabricio</span>
            </h2>
            <h6 className="">
              <b>
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.gentle}
                />
              </b>
            </h6>
            <VscLocation size={20} />
            <small className="pb-2">Argentina</small>
            <br />
            <Stack direction="horizontal" className="pt-2 mb-2 gap-3">
              <a target={'_blank'} href='https://github.com/fabricio3g' rel="noreferrer">
                <TooltipButton title={"Github"}>
                      <AiFillGithub size={20} color={"#212529"} />
                  </TooltipButton>
              </a>
              <a target={'_blank'} href='https://github.com/fabricio3g' rel="noreferrer">
                <TooltipButton title={"Linkedin"}>
                      <AiFillLinkedin size={20} color={"#212529"} />
                  </TooltipButton>
              </a>
              <a target={'_blank'} href='https://github.com/fabricio3g' rel="noreferrer">
                <TooltipButton title={"Twitter"}>
                      <AiFillTwitterCircle size={20} color={"#212529"} />
                  </TooltipButton>
              </a>
              <a target={'_blank'} href='https://github.com/fabricio3g' rel="noreferrer">
                <TooltipButton title={"UpWork"}>
                      <SiUpwork size={20} color={"#212529"} />
                  </TooltipButton>
              </a>
            </Stack>

            <Button className={Style.btn1}>Download CV</Button>
          </Col>
          <Col>
            <Image
             alt="avatar"
              src="https://fabricio3g.github.io/personal-portfolio/Avatar.jpg"
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </Container>
      <Container
 className="mt-5 p-5"
 
        fluid
        style={{ background: "#262730" }}
      >
        <h3 className="text-white text-center ">Skills</h3>
        <Container>
          <Row xs={1} md={3} className="gap-4 justify-content-center mx-auto">
            <Col>
              <Card className="mx-auto shadow rounded-pill">
                <Card.Title className="text-center mt-2 pt-1">
                  Languages
                </Card.Title>
                <Card.Body>
                  <Stack
                    direction={"horizontal"}
                    className={"gap-2 justify-content-center"}
                  >
                    <TooltipButton title={"CSS"}>
                      <SiCsswizardry title="CSS" size={30} color={"#212529"} />{" "}
                    </TooltipButton>
                    <TooltipButton title={"Typescript"}>
                      <SiTypescript size={30} color={"#212529"} />{" "}
                    </TooltipButton>
                    <TooltipButton title={"JavaScript"}>
                      <SiJavascript
                        title="Javascript"
                        color={"#212529"}
                        size={30}
                      />{" "}
                    </TooltipButton>
                    <TooltipButton title={"Python"}>
                      <SiPython size={30} color={"#212529"} />
                    </TooltipButton>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto shadow  rounded-pill ">
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
                      <SiNestjs size={30} color={"#212529"} />
                    </TooltipButton>
                    <TooltipButton title={"Express"}>
                      <SiExpress size={30} color={"#212529"} />
                    </TooltipButton>
                    <TooltipButton title={"Vue"}>
                      <SiVuedotjs size={30} color={"#212529"} />{" "}
                    </TooltipButton>
                    <TooltipButton title={"React"}>
                      <SiReact size={30} color={"#212529"} />
                    </TooltipButton>
                    <TooltipButton title={"Next js"}>
                      <SiNextdotjs size={30} color={"#212529"} />
                    </TooltipButton>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container style={{ marginTop: "5rem" }}>
        <h3 className="text-center mb-5">Lastest Works</h3>
        <Row xs={1} md={3} className="gap-4 justify-content-center mx-auto">
          <Col>
            <Card className={`mx-auto shadow rounded-lg ${Style.hoverCard}`}>
              <Card.Title className="text-center mt-2 pt-1">
                Verifiable Education
              </Card.Title>
              <Card.Body>
                <Card.Img src="https://www.upwork.com/att/download/portfolio/persons/uid/1102624734914351104/profile/projects/files/60ec2cd1-a497-47ea-8566-658935a6115e" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`mx-auto shadow rounded-lg ${Style.hoverCard}`}>
              <Card.Title className="text-center mt-2 pt-1">
                News App
              </Card.Title>
              <Card.Body>
                <Card.Img src="https://www.upwork.com/att/download/portfolio/persons/uid/1102624734914351104/profile/projects/files/36c86818-d321-4ec0-bcee-64a0f7496868" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`mx-auto shadow rounded-lg ${Style.hoverCard}`}>
              <Card.Title className="text-center mt-2 pt-1">
                News App
              </Card.Title>
              <Card.Body>
                <Card.Img src="https://www.upwork.com/att/download/portfolio/persons/uid/1102624734914351104/profile/projects/files/36c86818-d321-4ec0-bcee-64a0f7496868" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`mx-auto shadow rounded-lg ${Style.hoverCard}`}>
              <Card.Title className="text-center mt-2 pt-1">
                News App
              </Card.Title>
              <Card.Body>
                <Card.Img src="https://www.upwork.com/att/download/portfolio/persons/uid/1102624734914351104/profile/projects/files/36c86818-d321-4ec0-bcee-64a0f7496868" />
              </Card.Body>
            </Card>
          </Col>
          <Link href="/portfolio">
            <Button className={`${Style.btn1}`}>View More</Button>
          </Link>
        </Row>
      </Container>

      <Container fluid style={{background:'#272831'} } className='mt-5 p-5'>
          <h3 className='text-center my-4 text-white'>Latest posts</h3>
          <Row xs={1} md={4} className="gap-4 justify-content-center mx-auto">
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
            <Link href="/blog">
            <Button className={`${Style.btn1}`}>View More</Button>
          </Link>
          </Row>
        
        </Container>
    </>
  );
}
