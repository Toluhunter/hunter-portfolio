import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../Cards'
import portfolio_pic from '../../../src/Assets/Projects/portfolio.png'
import chesnut_pic from '../../../src/Assets/Projects/chestnut.webp'
import communely from '../../../src/Assets/Projects/communely.webp'


const Projects = () => {
    const cardsData = [
        {
            title: 'Portfolio Website',
            description: 'A showcase of my creative endeavors, where passion meets innovation. Explore and discover what drives me.',
            role: "Designed, Developed, and Maintained the Portfolio Website, Frontend and Infrastucture powered by AWS.",
            imgPath: portfolio_pic
        },
        {
            title: 'Chestnut School Portal',
            description: 'The Chestnut International School Management Portal, developed with a custom API and hosted on AWS, provides a robust solution for school administration. Designed for Chestnut International School in Lugbe, Abuja,',
            imgPath: chesnut_pic
        },
        {
            title: 'Communely',
            description: 'Communely is a platform that connects people with their community. It is a social networking platform that allows users to connect with like-minded individuals, share their experiences, and build meaningful relationships.',
            imgPath: communely
        }

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
                            <Cards title={card.title} description={card.description} imgPath={card.imgPath} role={card.role} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Projects;
