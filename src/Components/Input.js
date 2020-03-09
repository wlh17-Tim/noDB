import React, {Component} from 'react'

class Input extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            birthMonth: '',
            favoriteColor: ''
        }
    }

    handleNameChange = (firstName) => {
        this.setState({
            name: firstName
        })
    }

    handleBirthChange = (event) => {
        this.setState({
            birthMonth: event.target.value
        })
    }



    render(){
        return(
            <div className='input-boxes'>
                <p>Name:</p>
                <input onChange={(e) => this.handleNameChange(e.target.value)}/>
                <p>Birth Month:</p>
                {/* <input list="months" type="text" onChange={(e) => this.handleBirthChange(e.target.value)}/> */}
                <select value={this.state.birthMonth} onChange={this.handleBirthChange} id="months">
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
                <p>Favorite Color</p>
                <input />
                <button className="create-button">Create</button>
            </div>
        )
    }
}

export default Input