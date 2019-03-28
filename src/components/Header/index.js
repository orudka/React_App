import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

export default function HeaderComponent() {
    return (
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Keep It Simple Blog</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <Navbar.Brand>
                        <Link to="/singin"> Sing in</Link>
                    </Navbar.Brand>
                </Nav>
                <Nav pullLeft>
                    <NavItem to="/">
                        About
                        </NavItem>
                    <NavItem to="/">
                        Contact
                        </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}