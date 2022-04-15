import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = ()=>{
    const router = useRouter();
    const { id } = router.query;

    const [posts, setPosts] = useState([{}])

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
   

    return(
        <Layout>
            {loading ? (<div>Loading</div>):(
                (<PostContent post={blog.find(data => data.id ===  id)}/>)
            )}
            
        </Layout>
    )
}

export default Post