import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="Enter your email"
                        className="mt-3"
                    />
                    <Form.Control
                        placeholder="Enter your password"
                        className="mt-3"
                    />
                    <Row
                        className="justify-content-between mt-3"
                        style={{ display: "flex" }}
                    >
                        <div style={{ width: "auto" }}>
                            <NavLink
                                to={REGISTRATION_ROUTE}
                                style={{ textDecoration: "none" }}
                            >
                                Don't have account?
                            </NavLink>
                        </div>
                        <Button
                            style={{ width: 100, marginRight: 12 }}
                            variant="outline-success"
                        >
                            Login
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
