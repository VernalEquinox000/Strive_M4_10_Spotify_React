import React, { Component } from 'react'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import SpotifyLogo from "../images/logo/Spotify-logo.png"

export default class NavBar extends Component {
    render() {
        return (
            <div>
                  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img
        alt=""
        src={SpotifyLogo}
        width="100px"
        height=""
        className="d-inline-block align-top"
      />{' '}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            </div>
        )
    }
}
