import { useState } from "react"

export default function Players(){

    const playerStyle ={
        border: '2px solid yellow',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'

    }

    const [team, setTeam] = useState(11)
    const handleAdd = ()=>{
        // const newTeam = team+1;
        setTeam(team + 1);
    }
    const handleReduce = ()=>{
    
        setTeam(team - 1);
    }

    return(
        <div style={playerStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}