import React, { useState, useEffect} from 'react'
import axios from "axios"
import Bounty from "./Bounty"
import AddBounty from "./AddBounty"

function BountyPage() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty){
    axios.post("/bounties", newBounty)
      .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyID) {
    axios.delete(`/bounties/${bountyID}`)
    .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bounty.__id !== bountyID)))
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyID) {
    axios.put(`/bounties/${bountyID}`, updates)
      .then(res => setBounties(prevBounties => prevBounties.map(bounty => bounty.__id !== bountyID ? bounty : res.data)))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  })


  return (
    <div>
      <div className= "addBounty">
        <AddBounty 
            submit= {addBounty}
            btnTxt= "Add Bounty"/>
      </div>
      <div className="bountyContainer">
        <h1 className= "header">Current Bounties:</h1>
        {bounties.map(bounty => 
        <Bounty 
        {...bounty} 
        key= {bounty.__id}
        deleteBounty= {deleteBounty}
        editBounty= {editBounty}
        btnTxt= "Edit Bounty"/>)}
      </div>
    </div>
  );
}

export default BountyPage;
