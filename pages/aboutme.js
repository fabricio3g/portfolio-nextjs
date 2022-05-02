import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { BiDownArrowAlt } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Style from "../styles/Button.module.css";
import Certfs from '../components/Certfs'

const AboutMe = () => {
      

  return (
    <Layout>
      <Container fluid className="bg-black pt-2 pb-5">
        <Container className="d-flex flex-column text-white mt-5" >
          
          <h2 className=" text-center aboutme-text  my-5">
            Hello 👋 , I&apos;m Fabricio
          </h2>
          <p className="text-center lead">
          A Argentinian student at the National University of Rosario of Medical Science, and a technology enthusiast and dog lover 🐕</p>
          <h6 className="text-center">
            You can find more about my education below
          </h6>
          <a className="mx-auto" href="#studies">
            <Button className={Style.active} style={{ position: "relative" , background: '#fff !important'}}>
              <BiDownArrowAlt color="#000 !important" size={30}/>
            </Button>
          </a>
        </Container>
      </Container>
      <Container id="studies" className="mt-5 pt-5 d-flex flex-column align-items-center">
        <h4 className="text-center my-2 ">Courses certifications</h4>
  
         
        <Certfs title={'Become a Software Developer - Linkedin Learning'} url={"https://raw.githubusercontent.com/fabricio3g/personal-portfolio/main/old_desing/assets/certs/CertificadoDeFinalizacion_Become%20a%20Software%20Developer.pdf"}/>
          
      </Container>
    </Layout>
  );
};

export default AboutMe;
