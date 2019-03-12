import React from "react"

class Provider extends Component {
    state = {

    }
    handleOnSubmit = ({ target: { value, name }}) => {
        this.setState({
         [name]: value
        })
      }

      render () {
        const { title, imgURL, description } = this.state
        return(
            <div>
                <form>
                <input type="text" placeholder="title" name="title" value={titleValue} onSubmit={this.handleOnSubmit}/>
                <input type="text" placeholder="url" name="imgURL" value={imgValue} onSubmit={this.handleOnSubmit} />
                <input type="text" placeholder="Description" name="description" value={descriptionValue} onSubmit={this.handleOnSubmit} />
                <button type="submit" name="submit"/>
                </form>
            </div>



        )
      }



}