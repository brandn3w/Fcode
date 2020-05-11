
import React from "react";
import FormComponent from "./FormComponent"


class FormContainer extends React.Component {

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
  render(){
return(
<FormComponent 
handleChange={this.handleChange}
{...this.state} />  
)
}
}
export default FormContainer