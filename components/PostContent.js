import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ReactMarkdown from 'react-markdown'
import { useReadingTime } from "react-reading-time-estimator";
const PostContent = ({post}) => {
  const [markdown, setMarkdown] = useState([])
  const [loading, setLoading] = useState(true)
  const md = post.md
  function timeOutLoading(){
    setLoading(false)
  }
  useEffect(()=>{
    fetch(md)
      .then( res => res.text())
      .then(data => 
        {
          console.log(data)
          setMarkdown(data)
        }  
      ).catch(err => {throw err})
      .finally(()=>
      {
       setTimeout(timeOutLoading , 3000)
      }
      )
  },[])
 
  return (

    
    <Container className="mt-5 pt-5 mb-5">
      {
      loading ? (
        <Container  className=" border rounded p-5 shadow">


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

</Container>
) : (<Stack
        direction="vertical"
        className="shadow rounded p-3 mx-auto"
      >
              <div className="pb-3">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFSTGYCrlFFtA/profile-displayphoto-shrink_800_800/0/1638233773279?e=1653523200&v=beta&t=YGUvtuX7m8r4ev1aErJ9Yc303UrJxJfYc8LfJkYg0Pg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Fabricio</strong>
        </div>
        <h3>{post.title}</h3>
       
        <div className="mb-3">
    
          <small className="text-muted">20-03-2022</small>
          <small className="text-muted m-3"></small>
         
          <hr />
        </div>

        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </Stack>)
      }
      
    </Container>
  );
};

export default PostContent;
