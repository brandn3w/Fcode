import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{

render(){

    return(

    <div>
    <Header username="vschool"/>
    <Greeting />
    </div>

    )
}

}

export default App


class Header extends React.Component{

    render(){
return(
        <header>
            <p>Welcome, {this.props.username}</p>
        </header>
)
    }
}

export default Header

class Greeting extends React.Component{

    render(){

    }
}