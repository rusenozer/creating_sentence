import QuestionButton from './components/QuestionButton';
import Sentence from './components/Sentence';
import Words from './components/Words';
import "./styles/Box.css"

import './App.css';
import { useState} from 'react'

function App() {
  const [images,setImages] = useState([])
  const [id,setId]= useState("")
  const [index,setIndex] = useState(-1)

//setIsplaced düzeltilmeil




  function getCardData(question,index){
    setImages(question)
   
  }

  function select(id,index){
    setId(id);
    setIndex(index);

  }


  return (
    <div className="App">
          <QuestionButton getCardData={getCardData}/>
          <Sentence id={id}  images={images} index={index} />
          <div className="container">
              {images.map((image,index)=>{
                return <Words handleClick={()=>select(image.id,index)} key={image.id} src= {image.img_url}/>
              })}
          </div>
          
    </div>
  );
}

export default App;
