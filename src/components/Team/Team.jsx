import React,{useState} from 'react'
import Player from '../Player/Player.jsx'

function Team({teams,search}) {

const [show,setShow] = useState('')

//teams.franchisePlayers.con

    return (
        <div className="team">
           <p>{teams.name}</p> 
           <p>{teams.stadium}</p> 
           <button onClick={()=>(setShow(!show))}>
                    {
                        show ? 'Show less' : 'Show More'
                    }
            </button>
            {show ? teams.franchisePlayers.map((player) =>(<Player player={player} search={search}/>)) : ''}
        </div>
    )
}

export default Team

