import React, {useState} from "react";
import "./AddCampaign.scss"; 

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

const AddCampaign = props => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    let campaignToAdd = {
        id: '3',
        name: event.target.elements.campaignName.value,
        keywords: event.target.elements.campaignkeyword.value,
        bidAmount: event.target.elements.campaignBidAmount.value,
        campaignFund: event.target.elements.campaignFund.value,
        status: event.target.elements.campaignStatus.checked ? "on" : "off",
        town: event.target.elements.campaignTown.value,
        radius: event.target.elements.campaignRadius.value
    }
    const newlist = props.campaignList.concat([campaignToAdd]);
    props.setCampaignList(newlist);
    togglePopup()
  };

   return (
      <div className="right">
        <input
      type="button"
      value="Add"
      className="button"
      onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="addCapaign" onSubmit={handleSubmit} required>
        Name:<input className="form-control form-control-sm" type="text" id="campaignName" name="name" required></input><br></br>
        Keyword:<input className="form-control form-control-sm" type="text" id="campaignkeyword" name="keyword" required></input><br></br>
        Bid amount:<input className="form-control form-control-sm" type="number" placeholder="Minimum value: 10" min="10" id="campaignBidAmount" name="bidamount" required></input><br></br>
        Campaign fund:<input className="form-control form-control-sm" type="number" id="campaignFund" name="fund" required></input><br></br>
        Status:<br></br><input className="form-check-input" type="checkbox" id="campaignStatus"></input>
        <label className="form-check-label" >Active</label><br></br>
        Town:<select className="form-control form-control-sm" name="town" id="campaignTown">
            <option value="" disabled="true">Select from list...</option>
            <option>Alabama</option>
            <option>Alaska</option>
        </select><br></br>
        Radius:<input className="form-control form-control-sm" type="number" id="campaignRadius" name="lname" placeholder="[km]" required></input><br></br>
        <input className="button"value="Submit" type="submit"></input>
        </form>
      </>}
      handleClose={togglePopup}
    />}
    </div>
   );
}

export default AddCampaign;