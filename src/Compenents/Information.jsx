

function Information ({key, title, videoUrl, content}) {

    //misschien hier tabs toeveogen ?

    return (
        <div key={key}>
            <h2>{title}</h2>
            <div>
                <video src={videoUrl}></video>
            </div>
            <p>{content}</p>
        </div>
    )
}

export default Information;