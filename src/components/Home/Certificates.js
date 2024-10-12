import Carousel from "react-multi-carousel";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import aws_solutions_certificate from "../../../src/Assets/Certificates/aws-solution-architect.webp";
import "react-multi-carousel/lib/styles.css";

function Certificates(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Container fluid className="home-certificates-section" id="certificates">
            <Container >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <Cards title="AWS Solution Architect Associate" description="" imgPath={aws_solutions_certificate} />
                    <div>Item 4</div>
                </Carousel>
            </Container >
        </Container>
    );
}

export default Certificates;