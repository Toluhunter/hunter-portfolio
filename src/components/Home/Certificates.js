import Carousel from "react-multi-carousel";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import security_plus from "../../../src/Assets/Certificates/comptia-security-ce-certification.webp";
import isc2_cc from "../../../src/Assets/Certificates/certified-in-cybersecurity-cc.webp";
import "react-multi-carousel/lib/styles.css";

function Certificates(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
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
                <h1 style={{ fontSize: "2.6em" }}>
                    CERTIFICATES
                </h1>
                <Carousel
                    swipeable={true}
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
                    centerMode={true}
                    itemClass="carosel-slider"
                >
                    <Cards title="CompTIA Security+ ce Certification" description="" imgPath={security_plus} />
                    <Cards title="Certified in Cybersecurity (CC)" description="" imgPath={isc2_cc} />
                </Carousel>
            </Container >
        </Container>
    );
}

export default Certificates;