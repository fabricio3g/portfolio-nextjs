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
          <Navbar.Brand as='div'>
           
            <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link passHref href={'/'}>
              <Button className={path === '/' ? Style.active : Style.btn } id={path === '/aboutme' & !position ? 'text-white' : ''}>Home</Button>
            </Link>
            <Link passHref href={'/portfolio'}>
              <Button className={path === '/portfolio' ? Style.active : Style.btn } id={path === '/aboutme' & !position ? 'text-white' : ''}>Portfolio</Button>
            </Link>
            <Link passHref href={'/blog'}>
              <Button className={path === '/blog' ? Style.active : Style.btn } id={path === '/aboutme' & !position ? 'text-white' : ''} >Blog</Button>
            </Link>
            <Link passHref href={'/aboutme'}>
              <Button className={path === '/aboutme' ? Style.active : Style.btn }>About</Button>
            </Link>
            
          </Navbar.Collapse>
          </Navbar.Brand>
              <Button onClick={changeTheme} className={`bg-white border border-black shadow`}>
                  
                  {
                    context.themeName === 'DARK' ? (
                    <i className="my-auto"><BsSun color="#3700f9"/></i>
                    ): (<BsMoon color="#3700f9" />)
                  }
              </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
