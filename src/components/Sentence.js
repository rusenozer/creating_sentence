import { useEffect, useState } from "react"
import "../styles/Box.css";
import data from "../data/data";

const Sentence = (props)=>{

    const [img,setImg] = useState({    })

    const [sentence,setSentence] = useState("")

    useEffect(()=>{
        const id = props.id
        if(id>0 && id<5){
            setImg((prev)=>{
                return {
                    ...prev,
                    "first_img_url":data[0][props.index].img_url,
                    "first_kelime":data[0][props.index].kelime
                    
                }
            })
        }else if(id>4 && id < 10){
            setImg((prev)=>{
                return {
                    ...prev,
                    "second_img_url":data[1][props.index].img_url,
                    "second_kelime":data[1][props.index].kelime

                    
                }
            })
        }else if(id>9 && id < 15){
            setImg((prev)=>{
                return {
                    ...prev,
                    "third_img_url":data[2][props.index].img_url,
                    "third_kelime":data[2][props.index].kelime

                    }
                })
            }else if(id>14 && id < 20){
                setImg((prev)=>{
                    return {
                        ...prev,
                        "fourth_img_url":data[3][props.index].img_url,
                        "fourth_kelime":data[3][props.index].kelime

                        }
                    })
                }

    },[props.id,props.index])

    function showSentence(){
        setSentence(`${img.first_kelime} ${img.second_kelime} ${img.third_kelime} ${img.fourth_kelime}`)
    }
  
    return (
        <>
 <div className="container">
                <div className="box first-box" onClick={showSentence}>Cümle Oluştur</div>

                <div className="box">
                {img.first_img_url ?  <img className="box--img" src={`/images/${img.first_img_url}`} alt="animal1"/> : null}
                </div>
                <div className="box">
                 { img.second_img_url ?   <img className="box--img" src={(`/images/${img.second_img_url}`)} alt="animal1"/> : null }          
                 </div>
                 <div className="box">
                    {img.third_img_url ? <img className="box--img" src={(`/images/${img.third_img_url}`)} alt="animal1"/>  : null}
                </div>
                <div className="box">
                   {img.fourth_img_url ? <img className="box--img" src={(`/images/${img.fourth_img_url}`)} alt="animal1"/>  :null }         
                </div>

               

    </div>
        <div className="container">
                    <p className={`${sentence !== "" && "sentence"}`}>{sentence}</p>
                </div>
        </>
       

        
    )
}

export default Sentence




       
    
