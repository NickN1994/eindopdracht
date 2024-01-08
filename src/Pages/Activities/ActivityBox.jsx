import activityInfoShort from "./helpers/activityInfoShort.js";
import {Link} from "react-router-dom";


function ActivityBox (name, date, time, participants, teacher) {

    // activityInfo

    const example = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet fermentum risus. Aliquam erat volutpat. Integer vitae libero vitae elit tristique condimentum ut ac lectus. Suspendisse potenti. Nunc euismod purus et diam cursus, ut scelerisque odio dapibus. Vivamus ultrices lectus vel justo convallis, et viverra turpis pellentesque. Maecenas sit amet sem eu sem consectetur feugiat. Nullam non turpis id nisi congue bibendum. Sed eu metus eu turpis tincidunt tempus a ac orci. Integer vel ante vel justo vulputate finibus. Aliquam auctor mi eget ipsum luctus, ac tincidunt odio laoreet. Integer ac metus a tortor malesuada facilisis. Phasellus bibendum augue at tellus luctus euismod. Aenean at scelerisque tortor."

    return (
        <div>
            <h3>{name} {date} {time}</h3>
            {/*HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN*/}
            <p>Aantal plekken vrij: {participants}</p>
            <p>Begeleider: {teacher}</p>
            <p>{activityInfoShort(example)}...</p>

            <div>
                <button type="button"><Link to={}>Inschrijven</Link></button>
                <button type="button">
                    <Link to={`/activiteiten/${id}`}></Link>
                </button>
            </div>
        </div>
    )
}

export default ActivityBox;