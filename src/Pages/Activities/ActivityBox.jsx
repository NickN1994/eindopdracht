import activityInfoShort from "./helpers/activityInfoShort.js";
import {Link} from "react-router-dom";


function ActivityBox (name, date, time, participants, teacher) {

    // activityInfo

    return (
        <div>
            <h3>{name} {date} {time}</h3>
            {/*HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN*/}
            <p>Aantal plekken vrij: {participants}</p>
            <p>Begeleider: {teacher}</p>
            <p>{activityInfoShort(example)}...</p>

            <div>
                {/*<button type="button"><Link to={}>Inschrijven</Link></button>*/}
                <button type="button">
                    {/*<Link to={`/activiteiten/${id}`}></Link>*/}
                </button>
            </div>
        </div>
    )
}

export default ActivityBox;