import activityInfoShort from "../helpers/activityInfoShort.js";



// eslint-disable-next-line react/prop-types
function ActivityBox ({key, name, participants, teacher, date, time, activityInfo}) {

    // activityInfo

    return (
        <div key={key}>
            <h3>{name} op {date} {time}</h3>
            {/*HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN*/}
            <p>Aantal plekken vrij: {participants}</p>
            <p>Begeleider: {teacher}</p>
            <p>{activityInfoShort(activityInfo)}...</p>

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