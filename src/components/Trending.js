import {Card, Container, Row, Col, Image} from "react-bootstrap"
import afterImage from "../assets/images/movie/after.jpg"
import encounterImage from "../assets/images/movie/encounter.jpg"
import freedomImage from "../assets/images/movie/freedom.jpg"
import giverImage from "../assets/images/movie/giver.jpg"
import moonlightImage from "../assets/images/movie/moonlight.jpg"


const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" Id="trending">
                    <Card className="movieImage">
                        <Image src={afterImage} alt="after"  className="images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center ">AFTER</Card.Title>
                        <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-into additional content. 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={encounterImage} alt="action"  className="images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center ">ENCOUNTER</Card.Title>
                        <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-into additional content. 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={freedomImage} alt="action"  className="images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center ">FREEDOM</Card.Title>
                        <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-into additional content. 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={giverImage} alt="action"  className="images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center ">GIVER</Card.Title>
                        <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-into additional content. 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={moonlightImage} alt="action"  className="images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center ">MOONLIGHT</Card.Title>
                        <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-into additional content. 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending