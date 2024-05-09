import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/usefetch";
export default function Series() {
    const listSeries = useFetch('http://gateway.marvel.com/v1/public/series?ts=1&apikey=b1d0af8d550133575ff0f35e1d00fc67&hash=fb8f2143575c36a250b7c15ad06d4438&limit=20');
    return(
        <div>
            <div className="series-page"> 
                <div id="slide-series-image"/>
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries}/>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}