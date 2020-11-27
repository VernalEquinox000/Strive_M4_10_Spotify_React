import React, { Component } from 'react'
import { Card, Spinner, Alert } from "react-bootstrap";

export default class ArtistCard extends Component {
    
    state = {
        artist: {},
        loading: true,
    };
    
    fetch = async () => {

        try {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.id, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "8922e7eb38msha406b3662407a30p14661djsn13118198de68",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            });

            

        
            let artist = await response.json();
            console.log(artist)

            if (response.ok) {
                setTimeout(() => {
                this.setState({ artist: artist, loading: false });
                }, 1000);
            } else {
                <Alert variant="danger">ooops, something went wrong</Alert>;
                this.setState({ loading: false });
                    }
        } catch (error) {
            console.log(error)
        }
    }



    componentDidMount = () => {
        this.fetch();
    };

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                ) : (
                    <div>
                        <Card>
                            <Card.Img variant="top" src={this.state.artist.picture_big} alt={this.state.artist.name} />
                            <Card.Body>
                                <Card.Title>{this.state.artist.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    )}
            </div>
            );
        }
    }