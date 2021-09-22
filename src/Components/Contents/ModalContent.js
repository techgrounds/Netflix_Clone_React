import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalContentCard from './ModalContentCard';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ModalContent() {

    const [toggleExpanded, setToggleExpanded] = useState(false);

    let element = document.getElementsByClassName("meer-zoals-dit-container");

    function toggleButton() {
        if (toggleExpanded) {
            element[0].style.height = "400px";
        }
        else {
            element[0].style.height = "auto";
        }
        setToggleExpanded(!toggleExpanded);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="px-0">
                        <video autoPlay muted src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" width="100%" height="auto">
                        </video>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="meer-zoals-dit-container">
                <Row>
                    <Col>
                        <h2>Meer zoals dit</h2>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} lg={4}>
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                    <ModalContentCard />
                </Row>
            </Container>
            <Container fluid>
                <Row className="">
                    <Col className="px-0">
                        {/* <hr /> */}
                        <div className="my-hr" />
                        <button className="expand-mzd-button" onClick={toggleButton}>
                            {toggleExpanded? <FaChevronUp color="white"/> : <FaChevronDown color="white"/>}
                        </button>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="trailers-en-meer-container">
                <Row>
                    <Col>
                        <h2>Trailers en meer</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe width="200" height="auto" src="https://www.youtube.com/embed/DGX9UogxXeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col>
                        <iframe width="200" height="auto" src="https://www.youtube.com/embed/DGX9UogxXeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col>
                    <h2>Over {"filmtitle"}</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
