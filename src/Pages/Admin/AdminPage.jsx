import AddActivity from "../AddActivity/AddActivity.jsx";
import AddInformationGame from "../Courses/Game/AddInformationGame.jsx";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {Link} from "react-router-dom";
import "./Admin.css"

function AdminPage() {

    const {admin} = useContext(AuthContext);

    return (
        <>
            {admin ?
                <div className="outer-container">
                    <div className="inner-container">
                        <h1>Content toevoegen</h1>

                            <div className='admin-columns'>

                                <section className='admin-column'>
                                    <AddActivity/>
                                </section>

                                <section className='admin-column'>
                                    <AddInformationGame/>
                                </section>

                            </div>
                    </div>
                </div>

                :

                <div className="outer-container">
                    <div className="inner-container">
                        <div>
                            <button><Link to={"/"}>Ga terug naar Home</Link></button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default AdminPage;