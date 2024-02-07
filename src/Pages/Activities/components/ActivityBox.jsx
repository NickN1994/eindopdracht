import activityInfoShort from "../../../helpers/activityInfoShort.js";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext.jsx";



// eslint-disable-next-line react/prop-types
function ActivityBox ({name, participants, teacher, date, time, activityInfo}) {
    const {admin} = useContext(AuthContext);


    // activityInfo

    return (

        // <div>
        //     {edit ? (
        //         <div>
        //             <input type="text" defaultValue={name} />
        //             <input type="number" defaultValue={participants} />
        //             <input type="text" defaultValue={teacher} />
        //             <input type="date" defaultValue={date} />
        //             <input type="text" defaultValue={time} />
        //             <textarea defaultValue={activityInfo}></textarea>
        //             <button onClick={toggleEdit}>Opslaan</button>
        //             <button onClick={cancelEdit}>Annuleren</button>
        //         </div>
        //     ) : (
        //         // Toont de activiteit informatie
        //         <div>
        //             <h3>{name} op {date} {time}</h3>
        //             {/*HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN*/}
        //             <p>Aantal plekken vrij: {participants}</p>
        //             <p>Begeleider: {teacher}</p>
        //             <p>{activityInfoShort(activityInfo)}...</p>
        //             <div>
        //                 <button><Link to={"/"}></Link></button>
        //             </div>
        //             {/*NOG CODE SCHRIJVEN DAT DEZE ALLEEN ZICHTBAAR IS VOOR ADMIN*/}
        //             <button onClick={toggleEdit}>Aanpassen</button>
        //         </div>
        //     )}
        // </div>



        <div>
            <h3>{name} op {date} {time}</h3>
            {/*HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN*/}
            <p>Aantal plekken vrij: {participants}</p>
            <p>Begeleider: {teacher}</p>
            <p>{activityInfoShort(activityInfo)}...</p>

            <div>
                {admin ?
                <button type="button">
                    <Link to={`/activiteiten/:id`}>Activiteit bewerken</Link>
                </button>
                :
                <button type="button">
                    <Link to={`/activiteiten/:id`}>Meer informatie</Link>
                </button>}

            </div>
        </div>
    )
}

export default ActivityBox;