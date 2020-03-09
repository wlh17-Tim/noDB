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
            name: firstName,

        })
    }

    handleBirthChange = (event) => {
        this.setState({
            birthMonth: event.target.value
        })
    }

    handleColorChange = (event) => {
        this.setState({
            favoriteColor: event.target.value
        })
    }

    createMonster = () => {
        this.setState({
            name: '',
            birthMonth: '',
            favoriteColor: ''
        })
    }

    render(){
        return(
            <div className='input-boxes'>
                <p>First Name:</p>
                <input onChange={(e) => this.handleNameChange(e.target.value)}/>
                <p>Birth Month:</p>
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
                <select value={this.state.favoriteColor} onChange={this.handleColorChange} id="colors">
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="black">Black</option>

                </select>
                <button className="create-button">Create</button>
            </div>
        )
    }
}

export default Input