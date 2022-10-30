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

const DeleteCampaign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
   return (
      <div>
        <input
      type="button"
      value="Delete"
      class="button"
      onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="deleteCapaign" required>
        Are you sure? <br></br>
      <input class="button" type="submit" value="Yes"></input>
      <input class="button" type="submit" value="No"></input>
        </form>
      </>}
      handleClose={togglePopup}
    />}
    </div>
   );
}

export default DeleteCampaign;