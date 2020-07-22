import React from "react"
import Song from "./song.mp3"


class Contact extends React.Component {
    
    
    render() {
         return (
        <div>
            <h1 className= "contact">Call: <br></br>1-OOH-SO-HAPPY</h1>
            <audio autoPlay>
                <source src={Song}/>
            </audio>
            
        </div>
    )
    }
       
}

export default Contact