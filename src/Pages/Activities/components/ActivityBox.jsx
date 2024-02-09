import activityInfoShort from "../../../helpers/activityInfoShort.js";
import {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext.jsx";




// eslint-disable-next-line react/prop-types
function ActivityBox ({id, name, participants, teacher, date, time, activityInfo}) {
    const {admin} = useContext(AuthContext);
    // const {id} = useParams();


    // activityInfo

    return (


        <div>
            <h3>{name} op {date} {time}</h3>
            {/*HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN*/}
            <p>Totaal aantal plekken: {participants}</p>
            <p>Begeleider: {teacher}</p>
            <p>{activityInfoShort(activityInfo)}...</p>

            <div>
                {admin ?
                <button type="button">
                    <Link to={`/activiteiten/${id}`}>Activiteit bewerken</Link>
                </button>
                :
                <button type="button">
                    <Link to={`/activiteiten/${id}`}>Meer informatie</Link>
                </button>}

            </div>
        </div>
    )
}

export default ActivityBox;