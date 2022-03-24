import { Container, Stack } from "react-bootstrap";

const PostContent = () => {
  return (
    <Container className="mt-5 pt-5">
      <Stack
        direction="vertical"
        className="shadow rounded p-3 mx-auto"
      >
              <div className="mb-3">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFSTGYCrlFFtA/profile-displayphoto-shrink_800_800/0/1638233773279?e=1653523200&v=beta&t=YGUvtuX7m8r4ev1aErJ9Yc303UrJxJfYc8LfJkYg0Pg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Fabricio</strong>
        </div>
        <h3>Build a web3 app</h3>
       
        <div className="mb-3">
    
          <small className="text-muted">20-03-2022</small>
          <small className="text-muted m-3">5 min read</small>
         
          <hr />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptates aspernatur vero consequuntur assumenda inventore! Ducimus
          hic amet, vero, porro, ipsum consequuntur animi quas omnis asperiores
          praesentium itaque inventore quo.
        </p>
      </Stack>
    </Container>
  );
};

export default PostContent;
