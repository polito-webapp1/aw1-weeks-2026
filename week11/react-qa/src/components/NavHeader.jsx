import { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import { LogoutButton } from "./AuthComponents.jsx";

function NavHeader(props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // se darkMode === true, aggiungiamo data-bs-theme al tag html
    if(darkMode)
      document.documentElement.setAttribute("data-bs-theme", "dark");
    // altrimenti, rimuoviamo data-bs-theme
    else
      document.documentElement.removeAttribute("data-bs-theme");
  }, [darkMode]);

  return(
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid>
      <Link to="/" className="navbar-brand">HeapOverrun</Link>
      <Button onClick={() => setDarkMode(oldMode => !oldMode)}>
        { darkMode ? <i className="bi bi-sun-fill" /> : <i className="bi bi-moon-fill" />}
      </Button>
      {props.loggedIn ? 
        <LogoutButton logout={props.handleLogout} /> :
        <Link to="/login" className="btn btn-outline-light">Login</Link>
      }
      </Container>
    </Navbar>
  );
}

export default NavHeader;