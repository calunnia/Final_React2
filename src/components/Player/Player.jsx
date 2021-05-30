import React,{useState} from 'react'

function Player({player, search}) {
    const [vote, setVote] = useState('')
    const [ loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const startPost =(playerID) => {

      
        setLoading(true)
        setData([])
        
        fetch(`/api/vote`,{
                            method:"POST",
                            headers: {  'Authorization' : 'dsadkfjghdfkhd',
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                                    },
                            body: JSON.stringify({"id":playerID  })
                             }
        )
          .then((resopnse) => (resopnse.json()))
          .then((responseData) => { setData(responseData);
                                    setVote(!vote);               
          })
          .catch(error=>{
                          console.log('error=',error );
                          setData(null)
          })
          .finally( () => {
                            console.log('fetch end');
                            setLoading(false)
          })
        
        }


  

if( player.name.includes(search) )
  
    return (
        <div>
            {player.name } - 
            <button onClick={ () => (startPost(player.id))} > 
            {loading ? '...' :
                             vote ? 'voted' : 'vote' 
            }
            </button>
        </div>
    )
else
  return ''
}

export default Player
