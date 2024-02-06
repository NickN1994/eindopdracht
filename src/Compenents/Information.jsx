import {useState} from "react";

function Information({title, videoUrl, content}) {

    const [edit, setEdit] = useState(false);
    const toggleEdit = () => setEdit(prevEdit => !prevEdit);
    const cancelEdit = () => setEdit(false);

    //misschien hier tabs toeveogen ?

    return (
       <div>
           {edit ? (
               <div>
                   <input type="text" defaultValue={title} />
                   <input type="number" defaultValue={videoUrl} />
                   <textarea defaultValue={content}></textarea>
                   <button onClick={toggleEdit}>Opslaan</button>
                   <button onClick={cancelEdit}>Annuleren</button>
               </div>
           ) : (
               <div>
                   <h2>{title}</h2>
                   <div>
                       <video src={videoUrl}></video>
                   </div>
                   <p>{content}</p>
                   {admin && <button type={"button"} onClick={() => setEdit(true)}></button>}
               </div>
           )}
       </div>


    // <div>
    //     <h2>{title}</h2>
    //     <div>
    //         <video src={videoUrl}></video>
    //     </div>
    //     <p>{content}</p>
    //
    //     {admin && <button type={"button"} onClick={() => setEdit(true)}></button>}
    //
    // </div>


)
}

export default Information;