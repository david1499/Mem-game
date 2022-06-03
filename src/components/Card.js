function Card({item, id , cardClick}){

    const itemStateClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"Card" + itemStateClass} onClick={() => cardClick(id)}>
            <div>
                {item.img}
            </div>
        </div>
    )
}

export default Card