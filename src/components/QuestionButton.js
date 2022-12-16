import "../styles/Buton.css"
import Button from "./Button"
import data from "../data/data"
const QuestionButton = (props)=>{


    
    return(
        <div className = "questions">

            <Button handleClick={()=>props.getCardData(data[0])}  question="Kim" color="orange" src={data[0]}/>
            <Button handleClick={()=>props.getCardData(data[1])}  question="Ne zaman" color="yellow" src={data[1]}/>
            <Button handleClick={()=>props.getCardData(data[2])}  question="Nerede" color="green" src={data[2]}/>
            <Button handleClick={()=>props.getCardData(data[3])}  question="Ne yapıyor" color="blue" src={data[3]}/>
            
        </div>
        

    )
}


export default QuestionButton