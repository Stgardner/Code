import React, {Component} from 'react';
import Badge from "./Badge"

class Form extends Component {
    constructor() {
        super()

        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                birth: "",
                phone: "",
                faveFood: "",
                aboutMe: ""
            },
            badges: []
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit = e => {
        e.prevent.default()
        this.setState(prevState => {
            return {
                badges: [prevState.inputs, ...prevState.badges]
            }
        })
    }
    render() {
        let {firstName, lastName, email, birth, phone, faveFood, aboutMe, badges} = this.state.inputs
        const mappedBadges = badges.map((badge, i) => <Badge key={badge.firstName + i} badge={badge}/>)
        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange}/>
                <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange}/>
                <input type="text" name="email" placeholder="Email Address" value={email} onChange={this.handleChange}/>
                <input type="text" name="birth" placeholder="Place of Birth" value={birth} onChange={this.handleChange}/>
                <input type="text" name="phone" placeholder="Phone Number" value={phone} onChange={this.handleChange}/>
                <input type="text" name="faveFood" placeholder="Favorite Food" value={faveFood} onChange={this.handleChange}/>
                <input type="text" name="aboutMe" placeholder="About Me" value={aboutMe} onChange={this.handleChange}/>
                <button>Submit</button>
                
            </form>
            {mappedBadges}
            </React.Fragment>
        )
    }
}

export default Form;