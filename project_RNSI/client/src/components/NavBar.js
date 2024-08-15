import React, {useContext} from 'react';
//import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {DICTIONARIES_ROUTE, OID_ROUTE, CONFIG_ROUTE, RNSI_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    //const {user} = useContext(Context)
    //const history = useHistory()

    /*const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }*/

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href={RNSI_ROUTE}>РНСИ</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={DICTIONARIES_ROUTE}>Реестр справочников</Nav.Link>
                    <Nav.Link href={OID_ROUTE}>Реестр OID</Nav.Link>
                    <Nav.Link href={CONFIG_ROUTE}>Настройки</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
});

export default NavBar;