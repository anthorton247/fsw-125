import React, { useState, useEffect} from 'react'
import axios from "axios"
import AddWorker from "./AddWorker"
import Worker from "./Worker"

function WorkerPage() {
    const [workers, setWorkers] = useState([])
  
    function getWorkers() {
      axios.get("/capstone")
        .then(res => setWorkers(res.data))
        .catch(err => console.log(err))
    }
  
    function addWorker(newWorker){
      axios.post("/capstone", newWorker)
        .then(res => setWorkers(prevWorkers => [...prevWorkers, res.data]))
        .catch(err => console.log(err))
    }
  
    function deleteWorker(workerID) {
      axios.delete(`/capstone/${workerID}`)
      .then(res => setWorkers(prevWorkers => prevWorkers.filter(worker => worker.__id !== workerID)))
      .catch(err => console.log(err))
    }
  
    function editWorker(updates, workerID) {
      axios.put(`/capstone/${workerID}`, updates)
        .then(res => setWorkers(prevWorkers => prevWorkers.map(worker => worker.__id !== workerID ? worker : res.data)))
        .catch(err => console.log(err))
    }

    useEffect(() => {
      getWorkers()
    }, [])
    return (
        <div>
          <div className= "addWorker">
            <AddWorker 
                submit= {addWorker}
                btnTxt= "Add Worker"/>
          </div>
          <div className= "workerContain">
            <h1 className= "header">List of Workers:</h1>
            {workers.map(worker => 
            <Worker 
            {...worker} 
            key= {worker.__id}
            deleteWorker= {deleteWorker}
            editWorker= {editWorker}
            btnTxt= "Edit Worker"/>)}
          </div>
        </div>
      );
}

export default WorkerPage