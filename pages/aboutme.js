import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { BiLinkExternal, BiDownArrowAlt } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Style from "../styles/Button.module.css";
import { useEffect, useState } from "react";

const AboutMe = () => {
      
      function _arrayBufferToBase64( buffer ) {
        // Thanks to: 
        // https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
        let binary = '';
        let bytes = new Uint8Array( buffer );
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    const [pdf, setPdf] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
      fetch('https://raw.githubusercontent.com/fabricio3g/personal-portfolio/main/old_desing/assets/certs/CertificadoDeFinalizacion_Become%20a%20Software%20Developer.pdf')
        .then( res => res.arrayBuffer())
        .then(data => 
          {
            const base64 =_arrayBufferToBase64(data)
            setPdf(base64)
          }  
        ).catch(err => {throw err})
        .finally(()=>
        {
          setLoading(false)
        }
        )
    },[])










  return (
    <Layout>
      <Container fluid className="bg-black pt-2 pb-5">
        <Container className="d-flex flex-column text-white mt-5" >
          <h1 className="about-title border-0  text-center mt-5 text-white">About Me</h1>
          <h2 className="text-center aboutme-text mb-3">
            Hello 👋 , I&apos;m Fabricio
          </h2>
          <p className="text-center ">
            A Argentinian student at the National University of Rosario of Medical Science,
            and an a technology enthusiast and dog lover
          </p>
          <h6 className="text-center pt-3">
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
  
          <div role="button" className={`d-flex justify-content-between pe-auto w-100  p-2 rounded shadow my-2 border`}><span>Javascript Algorithms and Data Structures - FCC</span> <BiDownArrowAlt size={26}/></div>
         

        {
          loading ? "" :  (
           <Container className="p-2 border rounded"> 
            <iframe 
  title="frame"
  width="100%"
  height="700px"
  src={`data:application/pdf;base64,${pdf}`} />
  </Container>
          )
        }
          
      </Container>
    </Layout>
  );
};

export default AboutMe;
