import "./Leeromgeving.css"


function Leeromgeving () {

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h1>Leeromgeving</h1>
                <div className="video-box">
                    <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU?si=XI9DCNhEVrQgegt2" title="youtube-video" allowFullScreen></iframe>
                </div>

                <video src=""></video>

                <div className="video-box">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU?si=y3TJTeJdZfb9cVgn"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>


            </div>
        </div>
    )
}

export default Leeromgeving;
