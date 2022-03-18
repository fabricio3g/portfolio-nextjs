import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Admin = () => {
  const [adminData, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({
      ...adminData,
      [name]: value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-5 justify-content-center">
      <h3>Login </h3>
      <Form.Text className="text-muted">
        Ptsss, If you are not the admin, what&apos;s are you doing here?
      </Form.Text>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => handleInputs(e)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => handleInputs(e)}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={(e) => submitData(e)} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Admin;
