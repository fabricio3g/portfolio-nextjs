import { Table, Container } from "react-bootstrap";
import Layout from "../Components/Layout";
import { BiLinkExternal, BiDownArrowAlt } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Style from "../styles/Button.module.css";
const aboutMe = () => {
  return (
    <Layout>
      <Container fluid className="bg-sky pt-2">
        <Container className="d-flex flex-column text-white mt-5" >
          <h1 className="about-title border-0  text-center mt-5 text-white">About Me</h1>
          <h2 className="text-center aboutme-text mb-3">
            Hello 👋 , I&apos;m Fabricio
          </h2>
          <p className="text-center aboutme-text pb-1">
            A Argentinian student at the National University of Rosario of Medical Science,
            and an a technology enthusiast and dog lover
          </p>
          <h6 className="text-center pt-3">
            You can find more about my education below
          </h6>
          <a className="mx-auto" href="#table">
            <Button className={Style.active} style={{ position: "relative" , background: '#fff !important'}}>
              <BiDownArrowAlt color="#000 !important" size={30}/>
            </Button>
          </a>
        </Container>
      </Container>
      <Container id="table" className="mt-5 pt-5">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Course</th>
              <th>Certification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2020</td>
              <td>Responsive Web Desing - FCC</td>
              <td>
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/certification/bigobolson/responsive-web-design"
                  rel="noreferrer"
                >
                  <BiLinkExternal
                    size={30}
                    className={"cursor-pointer"}
                    color={"#41cbc5"}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default aboutMe;
