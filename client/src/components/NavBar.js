import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                    to={SHOP_ROUTE}
                >
                    BuyDevice
                </NavLink>
                {user.isAuth ? (
                    <Nav style={{ marginLeft: "auto", color: "white" }}>
                        <Button variant={"outline-light"}>Admin Panel</Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(false)}
                            style={{ marginLeft: 8 }}
                        >
                            Log out
                        </Button>
                    </Nav>
                ) : (
                    <Nav style={{ marginLeft: "auto", color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(true)}
                        >
                            Authorization
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
