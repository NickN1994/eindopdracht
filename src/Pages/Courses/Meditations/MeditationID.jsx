import {useNavigate, useParams} from 'react-router-dom';
import MeditationArray from "../../../Compenents/MeditationArray.js";
import "./Meditation.css"

function MeditationID() {
    let {id} = useParams();
    let navigate = useNavigate();
    const currentId = parseInt(id);
    const meditation = MeditationArray.find(meditation => meditation.id === parseInt(id));

    const goToPrevious = () => {
        if (currentId > 1) {
            navigate(`/meditaties/${currentId - 1}`);
        }
    };

    const goToNext = () => {
        if (currentId < 9) {
            navigate(`/meditaties/${currentId + 1}`);
        }
    };


    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className="meditation-box">
                    <h1>{meditation.title}</h1>
                    <p>{meditation.content}</p>
                    <div className="meditation-content">
                        <iframe src={meditation.videoUrl.replace("watch?v=", "embed/")}
                                title={meditation.title} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="btn-box-meditation">
                        <button className="btn btn-orange" onClick={goToPrevious} disabled={currentId <= 1}>Vorige</button>
                        <button className="btn btn-orange" onClick={goToNext} disabled={currentId >= 9}>Volgende</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeditationID;