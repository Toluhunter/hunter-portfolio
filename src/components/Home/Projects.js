import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './Cards'
import portfolio_pic from '../../../src/Assets/Projects/portfolio.png'


const CardGrid = () => {
    const cardsData = [
        {
            title: 'Portfolio Website',
            description: 'A showcase of my creative endeavors, where passion meets innovation. Explore and discover what drives me.',
            imgPath: portfolio_pic
        },
    ];

    return (
        <Container fluid className="home-project-section" id="projects">
            <Container >
                <h1 style={{ fontSize: "2.6em" }}>
                    PROJECTS
                </h1>
                <Row>
                    {cardsData.map((card, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Cards title={card.title} description={card.description} imgPath={card.imgPath} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default CardGrid;
