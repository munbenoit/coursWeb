import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

interface Props {
  title: string;
  text: string;
  link: string;
  img: string;
  className?: string;
}

export default function IndexCard({
  title,
  text,
  link,
  img,
  className,
}: Props) {
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
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
          <Button href={link}>En savoir plus</Button>
        </CardBody>
      </Card>
    </div>
  );
}
