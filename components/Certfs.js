import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {  BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import PdfRender from '../components/PdfRender'
const Certfs = ({ title, url }) => {
  const [active, setActive ] = useState(false)
  return (
    <>
      
      <div
        onClick={()=> setActive(!active)}
        role="button"
        className={`d-flex justify-content-between pe-auto w-100  p-2 rounded shadow my-2 border`}
      >
        <span>{title}</span>{" "}
        { active ? (<BiUpArrowAlt size={26}/>) : (<BiDownArrowAlt size={26} />) } 
      </div>{" "}
      {
          active && <PdfRender url={url}/>
      }
      
    </>
  );
};


export default Certfs