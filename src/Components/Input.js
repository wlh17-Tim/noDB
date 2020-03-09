import React, {Component} from 'react'

class Input extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className='input-boxes'>
                <p>Name:</p>
                <input />
                <p>Birth Month:</p>
                <input />
                <p>Favorite Color</p>
                <input />
                <button className="create-button">Create</button>
            </div>
        )
    }
}

export default Input