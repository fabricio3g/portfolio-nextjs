import Link from "next/link";
import TooltipButton from "./TooltipButton";

import {
  Container,

  Stack,

} from "react-bootstrap";

import { ThemeContext } from "../utils/contextTheme";
import { useContext } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  SiUpwork,
} from "react-icons/si";

const Footer = () => { 
  const {themeName} = useContext(ThemeContext)
    const themeChange = (themeName === 'DARK' )
    return(
      <Container fluid className={`  ${themeChange ? 'bg-gray-0 text-white' : ''} mt-auto pt-5 footer`}>
      <h1 className="text-center">
        <img className=" cursor-pointer mb-2" width={60} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/128px-Emoji_u1f44b.svg.png?20170527185010"/>
      </h1>
      <h2 className="text-center">Let&apos;s connect</h2>
      <h4 className="text-center text-muted">fabricio.3g@gmail.com</h4>
      <Stack
        direction="horizontal"
        className="gap-4 py-5 justify-content-center"
      >
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
      <p className="text-center">
        <small>Coded by &apos; Fabricio Medrano &apos; - 2023</small>
      </p>
    </Container>
    
 )

}

export default Footer
