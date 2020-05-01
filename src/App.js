
import React from "react";

import Joke from "./Joke"
import style from "./style.scss"
import jokesData from "./jokesData"

function App() {
    const jokeComponents = jokesData.map(joke =>  <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)


    return (

        <div className={style.jokeContainer}>
{jokeComponents }
</div>

    )
    }

export default App;