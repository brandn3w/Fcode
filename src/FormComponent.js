
import React from "react"

function FormComponent(props){
 
    return (
        <main>
            <form>
                <input name="firstName" value={props.firstName} type="text" placeholder="First name" onChange={props.handleChange} /> <br />
                <input name="lastName" value={props.lastName} type="text" placeholder="Last Name" onChange={props.handleChange} /><br />
                <input name="age" value={props.age} type="text" placeholder="Age" onChange={props.handleChange} /><br />

                <br />
                <label>
                    <input type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender = "female"}
                        onChange={props.handleChange} />
                </label>
                <label>
                    <input type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender = "male"}
                        onChange={props.handleChange} />
                </label>
                <br />

                <select value={props.destination} name="destination" onChange={props.handleChange}> //props, bo przekazujemy ją przez propsy
                    <option value="">--Please choose an option--</option>
                    <option value="Germany">Germany</option>
                    <option value="France">Froance</option>
                    <option value="Italy">Italy</option>
                </select>

                <br />

                <label>
                    <input type="checkbox" name="isVegan" onChange={props.handleChange}
                        checked={this.state.isVegan} />
                </label>

                <label>
                    <input type="checkbox" name="isKosher" onChange={props.handleChange}
                        checked={this.state.isKosher} />
                </label>

                <label>
                    <input type="checkbox" name="isLactoseFree" onChange={props.handleChange}
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
    )
  }

  export default FormComponent