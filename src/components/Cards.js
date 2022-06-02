import { useState } from "react"
import Card from "./Card"

function Cards(){

    const [items,setItems] = useState([
        { id: 1, img: '/img/A.png', stat: "" },
        { id: 1, img: '/img/A.png', stat: "" },
        { id: 2, img: '/img/B.png', stat: "" },
        { id: 2, img: '/img/B.png', stat: "" },
        { id: 3, img: '/img/C.png', stat: "" },
        { id: 3, img: '/img/C.png', stat: "" },
        { id: 4, img: '/img/D.png', stat: "" },
        { id: 4, img: '/img/D.png', stat: "" },
        { id: 5, img: '/img/E.png', stat: "" },
        { id: 5, img: '/img/E.png', stat: "" },
        { id: 6, img: '/img/F.png', stat: "" },
        { id: 6, img: '/img/F.png', stat: "" },
        { id: 7, img: '/img/g.png', stat: "" },
        { id: 7, img: '/img/g.png', stat: "" },
        { id: 8, img: '/img/h.png', stat: "" },
        { id: 8, img: '/img/h.png', stat: "" }
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