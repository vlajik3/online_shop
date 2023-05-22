import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ padding: "10px 25px" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <NavLink
            to={SHOP_ROUTE}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Device Shop
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user.isAuth ? (
              <>
                <Button variant={"outline-light"}>Админ панель</Button>
                <Button variant={"outline-light"}>Войти</Button>
              </>
            ) : (
              <Button
                variant="outline-light"
                onClick={() => user.setIsAuth(true)}
              >
                Авторизация
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;
