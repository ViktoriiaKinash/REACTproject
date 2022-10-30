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

const AddCampaign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
   return (
      <div class="right">
        <input
      type="button"
      value="Add"
      class="button"
      onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="addCapaign" required>
        Name:<input class="form-control form-control-sm" type="text" id="fname" name="name" required></input><br></br>
        Keyword:<input class="form-control form-control-sm" type="text" id="lname" name="keyword" required></input><br></br>
        Bid amount:<input class="form-control form-control-sm" type="number" placeholder="Minimum value: 10" min="10" id="lname" name="bidamount" required></input><br></br>
        Campaign fund:<input class="form-control form-control-sm" type="number" id="lname" name="fund" required></input><br></br>
        Status:<br></br><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        <label class="form-check-label" for="flexCheckDefault">Active</label><br></br>
        Town:<select class="form-control form-control-sm" name="town">
            <option value="">Select from list...</option>
            <option>Alabama</option>
            <option>Alaska</option>
        </select><br></br>
        Radius:<input class="form-control form-control-sm" type="number" id="radius" name="lname" placeholder="[km]" required></input><br></br>
        <input class="button" type="submit" value="Submit"></input>
        </form>
      </>}
      handleClose={togglePopup}
    />}
    </div>
   );
}

export default AddCampaign;