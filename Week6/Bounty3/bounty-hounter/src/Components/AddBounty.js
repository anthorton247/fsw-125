import React, {useState} from "react"

function AddBounty(props){
    const initInputs = {
        fName: props.fName || "",
        lName: props.lName || "",
        bounty: props.bounty || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event) {
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.submit(inputs, props.__id)
        setInputs(initInputs)

    }

    return (
        <form className= "input">
            <input
                type= "text" 
                name= "fName"
                placeholder= "First Name"
                value= {inputs.fName}
                onChange= {handleChange}/>
            <input 
                type= "text"
                name= "lName"
                placeholder= "Last Name"
                value= {inputs.lName}
                onChange= {handleChange}/>
            <input 
                type= "text"
                name= "bounty"
                placeholder= "Bounty Amount $"
                value= {inputs.bounty}
                onChange= {handleChange}/>
            <input 
                type= "text"
                name= "type"
                placeholder= "Jedi/Sith/Other"
                value= {inputs.type}
                onChange= {handleChange}/>
            <br></br>
            <br></br>
            <button onClick= {handleSubmit}>{props.btnTxt}</button>
        </form>
    )
}

export default AddBounty