import React from "react";
import Defaultlayout from "../components/layouts/Defaultlayout";
import Carosels from "../components/carousels/Carosels";
import "./home.css";
import CustomCard from "../components/custom-card/CustomCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Home() {
  const bookList = useSelector((state) => state.book.bookList);
  return (
    <Defaultlayout>
      {/* carosel */}
      <Carosels />
      {/* book cards */}
      <Container>
        {/* Heading */}
        <Row>
          <Col>
            <h1>Available Books</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Col className="d-flex justify-content-around flex-wrap g-2">
          {bookList.map((book) => {
            return <CustomCard key={book.id} {...book} />;
          })}
        </Col>
      </Container>
      <div>Home</div>
    </Defaultlayout>
  );
}

export default Home;
