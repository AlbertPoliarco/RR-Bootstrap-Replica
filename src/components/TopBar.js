import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function TopBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img src="../../instacartLogo.png" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Button variant="light">Log in</Button>
            <Button variant="success">Sign up</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
