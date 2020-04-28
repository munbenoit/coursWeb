import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

interface Props {
  title: string;
  text: string;
  img: string;
  date: string;
  className?: string;
}

export default function CvCard({ title, text, img, date, className }: Props) {
  return (
    <div>
      <Card className={className}>
        <CardImg
          top
          width="100%"
          src={img}
          alt={title}
          className="card-image"
        />
        <CardBody>
          <CardTitle>
            <b>{date}</b> {title}
          </CardTitle>
          <CardBody className="cv-card-body">{text}</CardBody>
        </CardBody>
      </Card>
    </div>
  );
}
