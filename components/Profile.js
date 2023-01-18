import { Container, Button, Stack, Row, Col, Image } from "react-bootstrap";
import TooltipButton from "./TooltipButton";
import TextTransition, { presets } from "react-text-transition";
import Style from "../styles/Button.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { VscLocation } from "react-icons/vsc";
import { ThemeContext } from "../utils/contextTheme";

import { useEffect, useState, useContext } from "react";

const Profile = () => {
  const TEXTS = [
    "Web Devolper",
    "Full Stack Dev",
    "Freelancer",
    "Mate Drinker",
  ];
  const { themeName } = useContext(ThemeContext);
 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );

    return () => clearTimeout(intervalId);
  }, []);
  let themeChange = (themeName === 'DARK')
  return (
    <Container
      fluid
      style={{ paddingTop: "7rem" }}
      className={`d-flex flex-nowrap justify-content-center bg-svg `}
    >
      <Row className={`p-2 mb-5 shadow border rounded mx-auto  ${ themeChange ? ' text-white bg-gray-0' : 'bg-white'}`}>
        <Col>
          <h2 className="">
            <span>I&apos;m Fabricio.</span>
          </h2>
          <h6>
            <b className="" style={{ color: "#3aa19d" }}>
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.gentle}
              />
            </b>
          </h6>
          <div>
            <VscLocation size={22} />
            <b>Argentina</b>
          </div>
          <br />
          <Stack direction="horizontal" className="pt-1 mb-3 gap-3">
            <a 
              target={"_blank"}
              href="https://github.com/fabricio3g"
              rel="noreferrer"
            >
              <TooltipButton title={"Github"}>
                <AiFillGithub size={20} color={`${ themeChange ? '#fff' : '#212529'}`} />
              </TooltipButton>
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/medrano-nestor"
              rel="noreferrer"
            >
              <TooltipButton title={"Linkedin"}>
                <AiFillLinkedin size={20} color={`${ themeChange ? '#fff' : '#212529'}`} />
              </TooltipButton>
            </a>
            <a
              target={"_blank"}
              href="https://twitter.com/bigobolson"
              rel="noreferrer"
            >
              <TooltipButton title={"Twitter"}>
                <AiFillTwitterCircle size={20} color={`${ themeChange ? '#fff' : '#212529'}`} />
              </TooltipButton>
            </a>
            <a
              target={"_blank"}
              href="https://www.upwork.com/freelancers/~01f2e7255549ee10cd"
              rel="noreferrer"
            >
              <TooltipButton title={"UpWork"}>
                <SiUpwork size={20} color={`${ themeChange ? '#fff' : '#212529'}`} />
              </TooltipButton>
            </a>
          </Stack>

          <Button className={`${Style.btn1}`}>Download CV</Button>
        </Col>
        <Col>
          <Image
            alt="avatar"
            className="shape shadow "
            src="https://avatars.githubusercontent.com/u/48396639?v=4"
            style={{ width: "130px"}}
          />
        </Col>
        
      </Row>
    </Container>
  );
};

export { Profile };
