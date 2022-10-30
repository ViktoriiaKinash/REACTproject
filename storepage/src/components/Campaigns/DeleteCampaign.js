import React, {useState} from "react";
import "./AddCampaign.scss";

const divStyle = {
    marginTop: "calc(35vh)",
    width: "20%"
}

const iconStyle = {
    top: "calc(35vh)",
    right: "40%"
}



const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box" style={divStyle}>
          <span className="close-icon" style={iconStyle} onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

const DeleteCampaign = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function deleteSelectedCampaign(campaign){
    props.setCampaignList(prev =>  prev.filter(el => el.id !== campaign.id));
  }

   return (
      <div>
        <input
        type="button"
        value="Delete"
        className="button"
        onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="deleteCapaign" required>
        Are you sure? <br></br>
      <input className="button"value="Yes" type="submit"  onClick={() => {deleteSelectedCampaign(props.campaign)}}></input>
      <input className="button" type="submit" value="No"></input>
        </form>
      </>}
      handleClose={togglePopup}
    />}
    </div>
   );
}

export default DeleteCampaign;