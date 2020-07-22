import React, {useState} from "react"
import AddWorker from "./AddWorker"

function Worker(props){
    const [editToggle, setEditToggle] = useState(false)
    function toggleOff() {
        setEditToggle(prevToggle => !prevToggle)
    }
    function img() {
        if(props.happy) {
            return ":D"
        } else {
            return ":,("
        }
    }   

    function happySad() {
        if(props.happy) {
            return "happy"
        } else {
            return "sad"
        }
    }  
    
    return (
        <div className= "worker">
            { !editToggle ?
            <>
                <h2>{props.name}</h2>
                <h4>{props.job}</h4>
                <h4>Age: {props.age}</h4>
                <h1 className= {happySad()}>{img()}</h1>
                <button className= "delete" onClick={() => props.deleteWorker(props.__id)}>Delete Worker</button>
                <button className= "edit" onClick= {() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
                <AddWorker 
                    name= {props.name}
                    job= {props.job}
                    age= {props.age}
                    likes= {props.likes}
                    happy= {props.happy}
                    __id= {props.__id}
                    btnTxt= {props.btnTxt}
                    submit= {props.editWorker}
                />
                <button onClick= {toggleOff}>Close</button>
            </>
            }
        </div>
    )
}

export default Worker