import Carousel from "react-multi-carousel";
import { Container } from "react-bootstrap";
import Cards from "../Cards";
import security_plus from "../../../src/Assets/Certificates/comptia-security-ce-certification.webp";
import isc2_cc from "../../../src/Assets/Certificates/certified-in-cybersecurity-cc.webp";
import aws_solution_architect from "../../../src/Assets/Certificates/aws-certified-solutions-architect-associate.webp";
import aws_devops from "../../../src/Assets/Certificates/aws-certified-devops-engineer-professional.webp";
import aws_ml from "../../../src/Assets/Certificates/aws-certified-machine-learning-specialty.webp";
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
                    autoPlaySpeed={5000}
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
                    <Cards title="AWS Certified DevOps Engineer – Professional" description="" imgPath={aws_devops} certlink="https://cp.certmetrics.com/amazon/en/public/verify/credential/0d03a4d28396432abf563484b551a8af" />
                    <Cards title="CompTIA Security+ ce Certification" description="" imgPath={security_plus} certlink="https://www.credly.com/badges/b41ec3b7-e89b-425a-9a27-1acab75c06f5" />
                    <Cards title="AWS Certified Machine Learning - Specialty" description="" imgPath={aws_ml} certlink="https://cp.certmetrics.com/amazon/en/public/verify/credential/949700d3d9ee459d84c0dee17d23bf34" />
                    <Cards title="Certified in Cybersecurity (CC)" description="" imgPath={isc2_cc} certlink="https://www.credly.com/badges/89c54739-c2c5-4fc0-8bcc-832192d9191d/public_url" />
                    <Cards title="AWS Certified Solutions Architect – Associate" description="" imgPath={aws_solution_architect} certlink="https://cp.certmetrics.com/amazon/en/public/verify/credential/8728cd26a469431b8f5051502cb29467" />
                </Carousel>
            </Container >
        </Container>
    );
}

export default Certificates;