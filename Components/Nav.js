import Link from "next/link";
import {
  Container,
  Navbar,
  Button,
} from "react-bootstrap";
import Style from "../styles/Button.module.css";
import {BsMoon, BsSun} from 'react-icons/bs'

import { useState, useContext } from 'react'
import { ThemeContext } from '../utils/contextTheme'

const Nav = ({position, path}) => {

  const context = useContext(ThemeContext)

  function changeTheme(){
      console.log('Context: ', context)
      if(context.themeName === 'DARK'){
        context.changeTheme('LIGTH')
      }else{
        context.changeTheme('DARK')
      }
      
  }

  return (
    <>
      <Navbar fixed={`top `} className={`${ position ? 'nav-bg ': ''}`}>
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
              <Button onClick={changeTheme} className='rounded-pill bg-white border border-black shadow'>
                  
                  {
                    context.themeName === 'DARK' ? (<BsSun color="#3700f9"/>): (<BsMoon color="#3700f9" />)
                  }
              </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
