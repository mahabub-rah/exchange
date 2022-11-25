import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "./Shared.css";
import { Image } from "react-bootstrap";
import me from "../../assets/pro.jpg";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" className="mt-2">
        <Container>
          <NavLink to="/">
            <img
              src={logo}
              width="160px"
              height="35px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-5 menu-section">
              <NavLink to="/" className="me-3">
                Home
              </NavLink>
              <NavLink to="/blog" className="me-3">
                Blog
              </NavLink>
              <NavLink to="/product">Product</NavLink>
            </Nav>
            <Nav>
              <Link to="login">
                <Button variant="outline-primary">Log in</Button>
              </Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="transparent"
                  className="p-0"
                  id="dropdown-basic"
                >
                  <Image src={me} width="40px" height="40px" roundedCircle />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="signup">
                <Button variant="outline-primary">Sign Up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form className="d-flex w-75 mx-auto my-3">
        <Form.Control
          type="search"
          placeholder="Search your Product"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default Header;