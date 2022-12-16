import { useState } from "react"
import "../styles/Buton.css"
const Button = (props)=>{
    



    return(
        
        <div onClick={props.handleClick}  className={`questions-btn ${props.color}`}>{props.question}?</div>

    )
}


export default Button