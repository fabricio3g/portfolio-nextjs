import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Style from "../styles/Button.module.css";
import {  useContext, useEffect, useState } from "react";
import {ThemeContext} from '../utils/contextTheme'
import Link from 'next/link'



const Posts = ()=> {
  const fakeData = [1,1,1,2]
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/fabricio3g/blog-markdown/main/blog.json')
      .then( res => res.json())
      .then(data => 
        {
          setPosts(data)
        }  
      ).catch(err => {throw err})
      .finally(()=>
      {
        setLoading(false)
      }
      )
  },[])

  const { blog } = posts
  const { themeName } = useContext(ThemeContext);
  let themeChange = (themeName === 'DARK')

    return(
      
    <Container  className={`pb-5 mt-2 ${themeChange && ' bg-gray-0 text-white '}`} >
    <h1 className='mx-5 font-weight-bold pt-5'>Blog.</h1>

    <Row xs={1} md={3} className="gap-3 justify-content-center mx-auto mt-5">
      {
        loading ? (<Container  className=" border rounded p-5 shadow">


        <svg className="mx-auto" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g id="loader">
       <animateTransform 
   
              attributeName="transform" 
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50" 
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
              restart="always" 
              />
       <path className="a" opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="#3aa19d"/>
       <path className="b" fillRule="evenodd" clipRule="evenodd" d="M100 50C100 22.3858 77.6142 0 50 0V10C72.0914 10 90 27.9086 90 50H100Z" fill="#6b12fe"/>
       </g>
   </svg>
   
   </Container>) :
        (blog.map((data , i)=>(
          <Col key={i}>
        <Card  className="mx-auto shadow  ">
        <Card.Body className='text-black'>
          <h5>{data.title}</h5>
          <p className="text-muted ">react-lazy-load-image-component is used to lazy load React components and images, it boasts of support for intersection observer which determines when an element leaves and enters a viewport and it’s also compatible with server-side rendering (SSR).</p>
          <p className="text-muted my-1">12-03-2022</p>
          <br/>
          <Link passHref href={`blog/${data.id.toString()}`}>
          <Button  className={`${Style.btn1}`}>
            Read
          </Button>
          </Link>
        </Card.Body>
        </Card>
      </Col>)
        ))
      }
      
    </Row>
  
  </Container>

    )
}

export default Posts