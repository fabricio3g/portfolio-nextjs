import Link from "next/link";
import {
  Container,
  Navbar,
  Button,
} from "react-bootstrap";
import Style from "../styles/Button.module.css";
import {BsSun} from 'react-icons/bs'
const Nav = ({position, path}) => {
  return (
    <>
      <Navbar fixed={`top `} className={`${ position ? 'nav-bg': ''}`}>
        <Container>
          <Navbar.Brand href="/">
           
            <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link href={'/'}>
              <Button className={path === '/' ? Style.active : Style.btn } id={path === '/aboutme' & !position ? 'text-white' : ''}>Home</Button>
            </Link>
            <Link href={'/portfolio'}>
              <Button className={path === '/portfolio' ? Style.active : Style.btn } id={path === '/aboutme' & !position ? 'text-white' : ''}>Portfolio</Button>
            </Link>
            <Link href={'/blog'}>
              <Button className={path === '/blog' ? Style.active : Style.btn } id={path === '/aboutme' & !position ? 'text-white' : ''} >Blog</Button>
            </Link>
            <Link href={'/aboutme'}>
              <Button className={path === '/aboutme' ? Style.active : Style.btn }>About</Button>
            </Link>
            
          </Navbar.Collapse>
          </Navbar.Brand>
              <Button className='rounded-pill bg-white border border-black shadow'>
                  <BsSun color="#3700f9"/>
              </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
