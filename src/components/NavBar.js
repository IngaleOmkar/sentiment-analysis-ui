import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Sentiment Analysis Tool</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/IngaleOmkar">GitHub</Nav.Link>
          <Nav.Link href="https://omkar.ingale.tech">Portfolio Website</Nav.Link>
          <Nav.Link href="https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest">Model</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}