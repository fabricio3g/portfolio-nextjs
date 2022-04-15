import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import { useReadingTime } from "react-reading-time-estimator";
const PostContent = ({post}) => {
  const [markdown, setMarkdown] = useState([])
  const [loading, setLoading] = useState(true)
  const md = post.md
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
        setLoading(false)
      }
      )
  },[])
  console.log(markdown)
 
  return (
    <Container className="mt-5 pt-5 mb-5">
      <Stack
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
      </Stack>
    </Container>
  );
};

export default PostContent;
