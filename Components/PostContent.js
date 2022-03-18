import { Container, Stack } from "react-bootstrap"


const PostContent = () => {
    return(
        <Container className='mt-5 pt-5'>
            <Stack direction="vertical" className='shadow-sm rounded p-5 mx-auto w-85'>
                    <h3>Build a web3 app</h3>
                    <div className="mb-3">
                        <small className="text-muted">20-03-2022</small><small className="text-muted m-3">5 min read</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates aspernatur vero consequuntur assumenda inventore! Ducimus hic amet, vero, porro, ipsum consequuntur animi quas omnis asperiores praesentium itaque inventore quo.</p>
            </Stack>
        </Container>
    )
}


export default PostContent