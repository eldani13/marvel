import BestCharacters from "../components/BestCharacters/BestCharacters";
import Insider from "../components/Insider/Insider";
import ListLastEvent from "../components/ListLastEvent/ListLastEvent";

export default function Home() {

    return(
        <div>
            <BestCharacters />
            <ListLastEvent/>
            <Insider />
            
        </div>
    );
}