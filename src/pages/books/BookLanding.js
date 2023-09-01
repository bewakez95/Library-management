import React from "react";
import Defaultlayout from "../../components/layouts/Defaultlayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewBorrowAction } from "../../borrow-history/BorrowHistoryAction";

function BookLanding() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.adminInfo.admin);
  const bookList = useSelector((state) => state.book.bookList);
  const SelectedbookList = bookList.find((book) => book.id === bookId);
  //   const { url, summary, name, year } = SelectedbookList;

  const handleOnBorrow = () => {
    const history = {
      userId: user.uid,
      userName: user.fName,
      title: SelectedbookList.title,
      bookId: bookId,
      url: SelectedbookList.url,
      borrowedAt: Date.now(),
      availableFrom: Date.now() + 14 * 24 * 60 * 60 * 1000,
    };
    dispatch(addNewBorrowAction(history));
  };

  return (
    <Defaultlayout>
      <Container>
        <Row>
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>
        </Row>
        <Row>
          {/* image */}
          <Col>
            <img src={SelectedbookList?.url} />
          </Col>
          {/* Book Info text  */}
          <Col>
            <h1>
              {SelectedbookList?.title}-{SelectedbookList?.name}
            </h1>
            <p>{SelectedbookList?.year}</p>
            <p>{SelectedbookList?.summary}</p>
            <p>
              {user?.uid ? (
                SelectedbookList?.isAvailable ? (
                  <Button>Borrow</Button>
                ) : (
                  <Button>
                    Available from{" "}
                    {new Date(SelectedbookList?.availableFrom).toDateString()}
                  </Button>
                )
              ) : (
                <Link to={"/signin"}>
                  <Button>Log in to Borrow</Button>
                </Link>
              )}
            </p>
          </Col>
        </Row>
      </Container>
      <div>BookLanding</div>;
    </Defaultlayout>
  );
}

export default BookLanding;
