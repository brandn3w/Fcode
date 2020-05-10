
import React from "react";
import { number } from "prop-types";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName="",
            lastName="",
            age= number,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, checked, type } = event.target
        type === "checkbox" ?
            this.setState( {    
                    [name]: checked       
            })
            :
            this.setState({ [name]: value })
    }
    render() {
        return (
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} type="text" placeholder="First name" onChange={this.handleChange} /> <br />
                    <input name="lastName" value={this.state.lastName} type="text" placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input name="age" value={this.state.age} type="text" placeholder="Age" onChange={this.handleChange} /><br />

                    <br />
                    <label>
                        <input type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender = "female"}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender = "male"}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Germany">Germany</option>
                        <option value="France">Froance</option>
                        <option value="Italy">Italy</option>
                    </select>

                    <br />

                    <label>
                        <input type="checkbox" name="isVegan" onChange={this.handleChange}
                            checked={this.state.isVegan} />
                    </label>

                    <label>
                        <input type="checkbox" name="isKosher" onChange={this.handleChange}
                            checked={this.state.isKosher} />
                    </label>

                    <label>
                        <input type="checkbox" name="isLactoseFree" onChange={this.handleChange}
                            checked={this.state.isLactoseFree} />
                    </label>

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Information:</h2>
                <p>Your name:{this.state.firstName}{this.state.lastName}</p>
                <p>Your age:{this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>destination:{this.state.destination}</p>
                <p> Your dietary restrictions:
                    Vegan: {this.state.isVegan ? "yes" : "no"}
                    Kosher:{this.state.isKosher ? "yes" : "no"}
                    Lactose free:{this.state.isLactoseFree ? "yes" : "no"}
                </p>

            </main>

export default App