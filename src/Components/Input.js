import React, {Component} from 'react'
import axios from 'axios'
import Display from './Display'

class Input extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            birthMonth: '',
            favoriteColor: '',
            monsterImage: '',
            monsterTrait: ''
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
        if(this.state.birthMonth && this.state.favoriteColor){
            axios.get(`/api/monster/${this.state.favoriteColor}/${this.state.birthMonth}`)
            .then(response => {
                this.setState({
                    monsterImage: response.data.pic,
                    monsterTrait: response.data.trait
                })
            })
            this.setState({
                name: '',
                birthMonth: '',
                favoriteColor: ''
            })
        }
    }

    render(){
        console.log(this.state.monsterImage)
        console.log(this.state.monsterTrait)
        // console.log(this.state.favoriteColor)
        // console.log(this.state.birthMonth)
        return(
            <div className="main">
                <div className='input-boxes'>
                    <p>First Name:</p>
                    <input onChange={(e) => this.handleNameChange(e.target.value)}/>
                    <p>Birth Month:</p>
                    <select value={this.state.birthMonth} onChange={this.handleBirthChange} id="months">
                        <option value=""></option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <p>Favorite Color</p>
                    <select value={this.state.favoriteColor} onChange={this.handleColorChange} id="colors">
                        <option value=""></option>
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Pink">Pink</option>
                        <option value="Black">Black</option>

                    </select>
                    <button className="create-button"onClick={() => this.createMonster()}>Create</button>
                </div>
                <Display monsterImage={this.state.monsterImage} monsterTrait={this.state.monsterTrait} name={this.state.name}/>
            </div>
        )
    }
}

export default Input