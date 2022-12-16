

const Words = (props)=>{



    return (
         <div className="box">
                <img onClick={props.handleClick} src={(`/images/${props.src}`)} alt="box-name" className="box--img"/>
        </div>

    )
}

export default Words