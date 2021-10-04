import React from 'react';
import { Col, Container, Row, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaRegPlayCircle, FaPlus, } from 'react-icons/fa'

export default function ModalFilmCard() {
    return (
        <Col className="modal-film-container px-0">
            <Container fluid className="film-card-container">
                <Row>
                    <Col xs={12} className="px-0" >
                        <Image fluid src="http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg" className="mzd-image" />
                    </Col>
                    <Col xs={12}>
                        {/* <OverlayTrigger key="top" placement="top" overlay={
                            <Tooltip id="tooltip-top">
                                Toevoegen aan Mijn Lijst
                            </Tooltip>
                        }> */}
                        <FaRegPlayCircle className="play-button" color="white" />
                        {/* </OverlayTrigger> */}
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <p className="match-text">xx% match</p>
                        <Image className="age-pic" src="https://www.kijkwijzer.nl/upload/pictogrammen/1_120_AL.png" />
                        <span>{"release date"}</span>
                    </Col>
                    <Col>
                        <button className="circle-button">< FaPlus color="white" /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Here comes a description</p>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}
