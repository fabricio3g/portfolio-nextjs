
import Link from "next/link";
import {
  Container,

  Stack,

} from "react-bootstrap";


import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  SiUpwork,
} from "react-icons/si";

const Footer = () => { 
    return(
      <Container fluid className="mt-auto pt-5 footer">
      <h1 className="text-center">👋</h1>
      <h2 className="text-center">Let's connect</h2>
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
        <small>Coded by 'Fabricio Medrano' - 2022</small>
      </p>
      <p className="text-center">
        <p className="text-muted">Domain provided by <a target={'_blank'} href='https://dev.ar/'>dev.ar</a></p>
      </p>

    </Container>
    
 )

}

export default Footer
