import React, {useState} from "react"
import AddBounty from "./AddBounty"

function Bounty(props){
    const [editToggle, setEditToggle] = useState(false)
    function type() {
        if(props.type.toLowerCase() === "jedi"){
            return ("jedi")
        } else if(props.type.toLowerCase() === "sith") {
            return("sith")
        } else {
            return ("other")
        }
    }
    return (
        <div className="bounty">
            { !editToggle ?
            <>
                <h2 className= "decoration">{props.fName} {props.lName}</h2>
                <h4 className= {type()}>{props.type}</h4>
                <p className= "money">{props.bounty}</p>
                <button className= "delete" onClick={() => props.deleteBounty(props.__id)}>Delete Bounty</button>
                <button className= "edit" onClick= {() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
                <AddBounty 
                    fName= {props.fName}
                    lName= {props.lName}
                    bounty= {props.bounty}
                    type= {props.type}
                    __id= {props.__id}
                    btnTxt= {props.btnTxt}
                    submit= {props.editBounty}/>
                <button onClick= {() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Bounty