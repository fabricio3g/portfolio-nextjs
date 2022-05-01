import { Button, Col, Container } from "react-bootstrap";
import Style from "../styles/Button.module.css";
const AdminLayout = () => {
  return (
    <Container fluid className={'d-flex flex-raw'}  style={{ height:'100vh' } }>
        {/* <Container 
          className="d-flex flex-column flex-shrink-0 p-3 m-0 bg-light"
          style={{ width: "280px", height:'100vh%' } }
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
            <span className="fs-4">Dashboard</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
            <Button className={` text-start mb-1 w-100 ${Style.btn}`}>
                Home
              </Button>
            </li>
            <li>
            <Button className={` text-start mb-1 w-100 ${Style.btn}`}>
                Create Article
              </Button>
            </li>
            <li>
            <Button className={` text-start mb-1 w-100 ${Style.btn}`}>
                Edit Article
              </Button>
            </li>
            <li>
              <Button className={` text-start mb-1 w-100 ${Style.btn}`}>
                Add Work
              </Button>
            </li>
            <li>
              <Button className={` text-start mb-1 w-100 ${Style.btn}`}>
                Customers
              </Button>
            </li>
          </ul>
          
          <div className="" >
          <hr />
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
          </div>

        </Container>
        <Container>
            Hello World
        </Container> */}
        </Container>
  );
};

export default AdminLayout;
