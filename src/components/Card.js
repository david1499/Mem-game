function Card({item, id , cardClick}){

    const itemStateClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"Card" + itemStateClass} onClick={() => cardClick(id)}>
            <img src={item.img} alt = ""/>
        </div>
    )
}

export default Card