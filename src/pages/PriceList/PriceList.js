import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import coin from "../../assets/images/coin-icon.png";

const PriceList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn btn-small-blue mt-16" onClick={handleShow}>
        View price
      </Button>

      <Modal show={show} onHide={handleClose} className="prizes-list-container">
        <Modal.Header closeButton>
          <Modal.Title className="popup-header">Prizes Rank List</Modal.Title>
        </Modal.Header>
        <Modal.Body className="prizes-list">
          <div className="prizes-list">
            <ul>
              <li>Rank 1</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 1,200
              </li>
            </ul>
            <ul>
              <li>Rank 2 - 10</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 700
              </li>
            </ul>
            <ul>
              <li>Rank 11 - 50</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 250
              </li>
            </ul>
            <ul>
              <li>Rank 51 - 200</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 100
              </li>
            </ul>
            <ul>
              <li>Rank 201 - 500</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 50
              </li>
            </ul>
            <ul>
              <li>Rank 501 - 1000</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 25
              </li>
            </ul>
            <ul>
              <li>Rank 1001 - 5000</li>
              <li>
                <img src={coin} width="19" alt="coin" /> 10
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PriceList;
