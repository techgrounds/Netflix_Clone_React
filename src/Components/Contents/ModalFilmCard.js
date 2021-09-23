import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { FaRegPlayCircle, FaPlus } from 'react-icons/fa'

export default function ModalFilmCard() {
    return (
        <Col className="modal-card-container">
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Image fluid src="http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg" className="le-image" />
                    </Col>
                    <Col xs={12}>
                        <FaRegPlayCircle className="play-button" color="white" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className="match-text">xx% match</p>
                    <Image className="age-pic" src="https://www.kijkwijzer.nl/upload/pictogrammen/1_120_AL.png" />
                    <span>{"release date"}</span>
                    </Col>
                    <Col>
                    < FaPlus className="add-to-wishlist" color="white" />
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}
