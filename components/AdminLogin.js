import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Style from "../styles/Button.module.css";

const AdminLogin = () => {
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
    <Container fluid className="justify-content-center bg-login">
      <Container className='mt-5 p-4 rounded shadow-lg bg-white' style={{width:'400px'}}>
      <h3 className="text-center">Login</h3>
      <p className="text-center mb-2 text-muted text-center">Admin access</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => handleInputs(e)}
            type="email"
            placeholder="Enter email"
            className='form_input'
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => handleInputs(e)}
            type="password"
            name="password"
            placeholder="Password"
            className='form_input'
          />
        </Form.Group>
        <Button className={Style.btn1} onClick={(e) => submitData(e)} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </Container>
    </Container>

  );
};

export default AdminLogin;
