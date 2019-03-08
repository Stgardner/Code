import React from "react";
import {withDataProvider} from "./DataProvider"
import { withRouter} from "react-router-dom"



class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        zipCode: '',
        country: ''
      };
      
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange({target: {name, value}}){ 
  this.setState({
    [name]:value 
  })
} 
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.buttonClick(this.state)
      this.props.history.push("/weather")
      
     
    }
  
    render() {
      

      return (
        <div>
        <form onSubmit={this.handleSubmit} style={{marginBottom: "100px", textAlign: "center", margin: "auto", marginBottom: "100",fontSize: "1.5em"}}>
          <label>
            Zip Code: 
            <input required pattern="[0-9]{5}" type="text" name="zipCode" placeholder="84105" value={this.state.value} onChange={this.handleChange} />
          </label>
          {/* <label>
            Country:
            <input type="text" name="country" placeholder="us" value={this.state.value} onChange={this.handleChange} />
          </label> */}
          
         <input type="submit" value="Get Weather" />
          
        </form>
        </div>
      );
    }
  }
export default withRouter(withDataProvider(Form))