

function Card ({icon, title, text}) {
    
    return (
        <div className="cardContainer">
            <img src={icon} alt="" />
            <p className="cardTitle">{title}</p>
            <p className="cardText">{text}</p>
        </div>
    )
}

export default Card;