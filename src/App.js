import { useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

function App() {
    let navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const sanitisedInput = DOMPurify.sanitize(searchValue);
        if (sanitisedInput !== searchValue) {
            setSearchValue("");
        } else {
            navigate("/test");
        }
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        checkPassword();
    };

    const checkPassword = async () => {
        const response = await fetch(`http://localhost:3000/login`, {
            method: "POST",
            body: JSON.stringify({
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        if (response.status == 200) {
            navigate("/welcome", { state: { password: password } });
        } else {
            alert("Invalid password");
        }
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="ControlInput1"
                            >
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Search here"
                                    value={searchValue}
                                    onChange={(e) =>
                                        setSearchValue(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit2}>
                            <Form.Group
                                className="mb-3"
                                controlId="ControlInput2"
                            >
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Login"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
