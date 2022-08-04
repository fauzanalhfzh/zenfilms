import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand class="navbarNama">ZENFILMS</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link>SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )

}

export default NavigationBar