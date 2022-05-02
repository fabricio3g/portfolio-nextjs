import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { BiDownArrowAlt } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Style from "../styles/Button.module.css";
import Certfs from '../components/Certfs'
import Timeline from "../components/Timeline/Timeline";
const AboutMe = () => {
      const data = [
        {
          text: 'I started to continue with programing while the pandemic situation continues.',
          date: 'May 01 2020',
          category: {
              tag: 'PANDEMIC  AND PROGRAMING😷',
              color: '#ce3e40'
          },
          link: {
              url: false,
              text: 'Read more'
          }
      },
        {
          text: 'SARS-CoV-2 Hit on the world, and is was not able to continue my studies, because practice at hospitals was not allowed.',
          date: 'Mar 11 2020',
          category: {
              tag: 'PANDEMIC 😷',
              color: '#ce3e40'
          },
          link: {
              url: false,
              text: 'Read more'
          }
      },
        {
            text: 'Started to studie at the National University Of Rosario',
            date: 'Feb 5 2017',
            category: {
                tag: 'Studies',
                color: '#364481'
            },
            link: {
                url: 'https://fcm.unr.edu.ar/',
                text: 'Read more'
            }
        },
        {
          text: '👶',
          date: 'March 12 1998',
          category: {
              tag: '',
              color: '#fff'
          },
          link: {
              url: false,
              text: true
          }
      }
    ];

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
      
      <Container>
        <h4 className="text-center my-5">Timeline</h4>
        <Timeline data={data}/>
      </Container>
      <Container id="studies" className="mt-5 pt-5 d-flex flex-column align-items-center">
        <h4 className="text-center my-2 ">Courses certifications</h4>
        <Certfs title={'Become a Software Developer - Linkedin Learning'} url={"https://raw.githubusercontent.com/fabricio3g/personal-portfolio/main/old_desing/assets/certs/CertificadoDeFinalizacion_Become%20a%20Software%20Developer.pdf"}/>
      </Container>
    </Layout>
  );
};

export default AboutMe;
