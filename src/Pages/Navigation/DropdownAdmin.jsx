import "./Styles/Dropdown.css"
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {MenuItemsAdmin} from "./components/MenuItemsAdmin.jsx";

function DropdownAdmin() {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItemsAdmin.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropdownAdmin;