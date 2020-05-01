import React from "react";

function Joke (props){
console.log(props)
    return (
     <div>
     <h3 style={{display: props.question ? "block" : "none"}}>Question:{props.question}</h3>
     <p>Answer:{props.punchline}</p>
 </div>

    )
}

export default Joke;