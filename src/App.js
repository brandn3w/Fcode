
import React from "react";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isfriendly: true
            gender:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    render() {
        return (
            <form>
                <input type="text" value={this.state.firstname} name="firstname" placeHolder="first name" onChange={this.handleChange} />
                <br />
                <input type="text" value={this.state.lastname} name="lastName" placeHolder="last name" onChange={this.handleChange} />


                <textarea value={text}
                    onChange={this.handleChange
                        />
                        <br />
                        <label>
                            <input type="checkbox"
                                name="isFriendly"
                                checked={this.state.isFriendly}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label>
                            <input type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender==="female"}
                            onChange={this.handleChange}
                            /> Female
                        </label>

                         <label>
                         <input type="radio"
                         name="gender"
                         value="male"
                         checked={this.state.gender==="male"}
                         onChange={this.handleChange}
                         /> male
                     </label>

                     <select>
                         <option></option>
                         <option></option>
                         <option></option>
                     </select>
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
        </form>
    )
}

export default App