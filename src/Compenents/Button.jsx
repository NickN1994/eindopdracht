import "./Button.css"

function Button (props) {

    return (
        <>
        <button className="btn" type={props.type}>{props.buttonName}</button>
        </>
    )
}

export default Button;