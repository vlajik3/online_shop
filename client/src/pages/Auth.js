import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";

const Auth = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">
          {isLoginPage ? "Авторизация" : "Регистрация"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            type="email"
            className="mt-3"
            placeholder="Введите ваш email"
          />
        </Form>
        <Form className="d-flex flex-column">
          <Form.Control
            type="password"
            className="mt-3"
            placeholder="Введите ваш пароль"
          />
          <Row
            className="d-flex justify-content-between mt-3 ps-3 pe-3"
            style={{ flexWrap: "nowrap" }}
          >
            {isLoginPage ? (
              <div className="w-auto m-0 p-0">
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div className="w-auto m-0 p-0">
                Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button className="w-auto" variant="outline-success">
              {isLoginPage ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
