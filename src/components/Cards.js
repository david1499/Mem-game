import { useState } from "react"
import Card from "./Card"

function Cards(){

    const [items,setItems] = useState([
        { id: 1, img: 'A', stat: "" },
        { id: 1, img: 'A', stat: "" },
        { id: 2, img: 'B', stat: "" },
        { id: 2, img: 'B', stat: "" },
        { id: 3, img: 'C', stat: "" },
        { id: 3, img: 'C', stat: "" },
        { id: 4, img: 'D', stat: "" },
        { id: 4, img: 'D', stat: "" },
        { id: 5, img: 'E', stat: "" },
        { id: 5, img: 'E', stat: "" },
        { id: 6, img: 'F', stat: "" },
        { id: 6, img: 'F', stat: "" },
        { id: 7, img: 'G', stat: "" },
        { id: 7, img: 'G', stat: "" },
        { id: 8, img: 'H', stat: "" },
        { id: 8, img: 'H', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev,setPrev] = useState(-1)

    function cardClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    return  (
    <div className="container">
        {
            items.map((item , index) => (
                <Card key = {index} item = {item} id = {index} cardClick = {cardClick}/>
            ))
        }
    </div>

    )
}

export default Cards