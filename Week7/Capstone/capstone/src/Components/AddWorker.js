import React, {useState} from "react"


function AddWorker(props){
    
    const initInputs = {
        name: props.name || "",
        job: props.job || "",
        age: props.age || "",
        happy: props.happy || undefined

    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event) {
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(event) {

        props.submit(inputs, props.__id)
        setInputs(initInputs)
    }

    return (
        <form className= "input">
            <input
                type= "text" 
                name= "name"
                placeholder= "Name"
                value= {inputs.name}
                onChange= {handleChange}/>
            <input 
                type= "text"
                name= "job"
                placeholder= "Job"
                value= {inputs.job}
                onChange= {handleChange}/>
            <input 
                type= "number"
                name= "age"
                placeholder= "Age"
                value= {inputs.age}
                onChange= {handleChange}/>
            <input 
                type= "text"
                name= "happy"
                placeholder= "Happy? True or False"
                value= {inputs.happy}
                onChange= {handleChange}/>
            <br></br>
            <br></br>
            <button onClick= {handleSubmit}>{props.btnTxt}</button>
        </form>
    )
}

export default AddWorker



