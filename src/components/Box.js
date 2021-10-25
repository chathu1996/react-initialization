import "./Box.css"

function Box(props) {
    return(
        <div className="box">
           <h1>{props.title}</h1>
           <p>{props.test}</p>
        </div>
    )
}


export default Box;