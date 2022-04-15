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
        loading ? (<div>Loading...</div>) :
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