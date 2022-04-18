import React from "react";
import { Card } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <>
      <div>
        <Card border="white" style={{ width: "11rem" }}>
          <Card.Img className="card-Img" variant="top" src={props.img} />
          <p className="card-p">
            <strong>{props.name}</strong>
          </p>
          <a className="card-p link-secondary" href="">
            {props.linkname}
          </a>
        </Card>
      </div>
    </>
  );
};

export default MyCard;
