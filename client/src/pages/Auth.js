import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(true);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="Enter your email"
                        className="mt-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        placeholder="Enter your password"
                        className="mt-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row
                        className="justify-content-between mt-3"
                        style={{ display: "flex" }}
                    >
                        {isLogin ? (
                            <div style={{ width: "auto" }}>
                                Don't have account?{" "}
                                <NavLink
                                    to={REGISTRATION_ROUTE}
                                    style={{ textDecoration: "none" }}
                                >
                                    Register
                                </NavLink>
                            </div>
                        ) : (
                            <div style={{ width: "auto" }}>
                                Already have account?{" "}
                                <NavLink
                                    to={LOGIN_ROUTE}
                                    style={{ textDecoration: "none" }}
                                >
                                    Login
                                </NavLink>
                            </div>
                        )}
                        <Button
                            style={{ width: 100, marginRight: 12 }}
                            variant="outline-success"
                            onClick={click}
                        >
                            {isLogin ? "Login" : "Register"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
