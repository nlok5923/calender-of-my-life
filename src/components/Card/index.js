import './Card.css'

const Card  = (props) => {

    const bgPassed = {
        backgroundColor: "rgba(140, 7, 142, 0.5)"
    }

    const bgtime = {
        backgroundColor: "rgba(55, 19, 84, 0.74)"
    }

    return(
        (props.passed) ? <div className="card" style={bgPassed}> {props.number} </div>: <div className="card" style={bgtime}> {props.number} </div>  
    );
}

export default Card;