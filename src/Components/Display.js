import React from 'react'

function Display(props){
console.log(props)
    return(
        <div className="display-output">
            <div className="display">
                <img src={props.monsterImage} />
                {/* <p>Monster name</p> */}
                <p>{props.monsterTrait}</p>
                <p>{props.name}</p>
                <button>Save</button>
            </div>
        </div>
        )
    }

export default Display