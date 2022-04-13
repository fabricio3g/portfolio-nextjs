
import Link from "next/link";
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
    return(
      <Container fluid className={`pb-5  ${themeName === 'DARK' ? 'bg-gray-0 text-white' : ''} mt-auto pt-5 footer`}>
      <h1 className="text-center">👋</h1>
      <h2 className="text-center">Let&apos;s connect</h2>
      <h4 className="text-center text-muted">fabricio.3g@gmail.com</h4>
      <Stack
        direction="horizontal"
        className="gap-4 py-5 justify-content-center"
      >
        <AiFillGithub title="Github" size={20} />{" "}
        <AiFillLinkedin title="Linkedin" size={20} />{" "}
        <AiFillTwitterCircle title="Twitter" size={20} />
        <SiUpwork title="Upwork" size={20} />
      </Stack>
      <p className="text-center">
        <small>Coded by &apos; Fabricio Medrano &apos; - 2022</small>
      </p>
      <p className="text-center">
        <p className="text-muted">Domain provided by <a target={'_blank'} rel='noreferrer' href='https://dev.ar/'>dev.ar</a></p>
      </p>

    </Container>
    
 )

}

export default Footer
