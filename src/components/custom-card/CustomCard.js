import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CustomCard({ id, title, name, year, url, summary }) {
  return (
    <Link to={`/book/${id}`} className="nav-link">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>
            {title}-{year}
          </Card.Title>
          <Card.Text>{summary}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CustomCard;
