import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvent.scss";
import useFetch from "../../hooks/usefetch";
import LastEvents from "../LastEvents/LastEvents";


export default function ListLastEvents() {
  const lastEventsFetch = useFetch(
    'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b1d0af8d550133575ff0f35e1d00fc67&hash=fb8f2143575c36a250b7c15ad06d4438&limit=5'
    );

   
  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />

        </Card.Group>
      </Container>
    </div>
  );
} 