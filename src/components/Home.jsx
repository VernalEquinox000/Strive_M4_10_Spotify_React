import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap"
import ArtistCard from "./ArtistCard"



export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Best artists</h1>
                    <Row title="Best artists"  style={{color:"grey"}} className="mb-3">
                        <Col xs={4} md={3} lg={3}><ArtistCard id="1" /></Col>
                        <Col xs={4} md={3} lg={3}><ArtistCard id="2" /></Col>
                        <Col xs={4} md={3} lg={3}><ArtistCard id="3" /></Col>
                        <Col xs={4} md={3} lg={3}><ArtistCard id="4" /></Col>
                    </Row>
                    <h1>Most listened</h1>
                    <Row title="Most listened"  style={{color:"grey"}}className="mb-3">
                        <Col xs={4} md={3} lg={3}><ArtistCard id="5" /></Col>
                        <Col xs={4} md={3} lg={3}><ArtistCard id="6" /></Col>
                        <Col xs={4} md={3} lg={3}><ArtistCard id="7" /></Col>
                        <Col xs={4} md={3} lg={3}><ArtistCard id="8" /></Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
