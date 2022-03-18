import Link from "next/link";
import {
  Container,
  Navbar,
  Button,
} from "react-bootstrap";
import Style from "../styles/Button.module.css";

const Nav = ({position, path}) => {
  return (
    <>
      <Navbar fixed={`top `} className={`${ position ? 'nav-bg': ''}`}>
        <Container>
          <Navbar.Brand href="/">
            <Link href={'/'}><span className="dot">
              <span className="inner_dot"></span>
            </span>
            </Link> 
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link href={'/'}>
              <Button className={path === '/' ? Style.active : Style.btn }>Home</Button>
            </Link>
            <Link href={'/portfolio'}>
              <Button className={path === '/portfolio' ? Style.active : Style.btn }>Portfolio</Button>
            </Link>
            <Link href={'/blog'}>
              <Button className={path === '/blog' ? Style.active : Style.btn }>Blog</Button>
            </Link>
            <Link href={'/aboutme'}>
              <Button className={path === '/aboutme' ? Style.active : Style.btn }>About</Button>
            </Link>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
